# Delegate CRM & Operations Hub Plan

## Objective
Evolve the delegate ingestion and scanning system into a full Operations Hub for the MUN Secretariat. This system will securely manage delegate profiles, track realtime scanning logs, visualize committee allocations, and safely dispatch batched emails containing QR codes.

---

## Phase 1: Database Evolution & Types
**Goal:** Track email delivery and prepare the database for advanced relational queries without breaking the current scanner.

- [x] **Task 1.1: Schema Update (SQL)**
  - Add a new column `allocation_mail_sent_at` (TIMESTAMP WITH TIME ZONE, nullable) to the `delegates` table.
  - Add a new enum column `mail_status` (TEXT or ENUM: 'PENDING', 'PROCESSING', 'SENT', 'FAILED') to act as a system-level concurrency lock.
  - *Purpose:* Allows the system to know exactly who has received their QR code email. Locking with `mail_status = 'PROCESSING'` prevents accidental double-emails if two admins push Send at the exact same moment.
  
  *Note:* SQL commands have been extracted to `f:\a\igac-app\supabase_crm_update.sql`. **Run that file in your Supabase SQL Editor.**

- [x] **Task 1.2: Update TypeScript Types**
  - Update `src/lib/database.types.ts` to include the new `allocation_mail_sent_at` and `mail_status` properties.

---

## Phase 2: Frontend Dashboard (The CRM UI)
**Goal:** Build the CRM under the `/portal` section (e.g., `/portal/crm`). **Security:** Use Next.js `middleware.ts` to enforce HTTP-Only cookie validation. The master admin code (`subaru5889@`) must be verified via an API route that sets a secure cookie, rather than a vulnerable client-side check. This protects both the UI and the underlying backend APIs. Data fetching uses **Next.js Server Actions** with `getServiceSupabase()` to safely bypass RLS since users authenticate via the master password rather than standard Supabase user accounts.

- [x] **Task 2.1: Tabbed Navigation Interface & Dashboard UI**
  - Create tabs: `1. Ingestion` (CSV Upload), `2. Registry` (Delegate Profiles), `3. Committees`, `4. Scan Logs`.
  - Design the dashboard as an IGAC "Control Room" with the golden logo, a "Live" status indicator, glowing pills for tabs, and a massive background gradient for a cinematic feel.

- [x] **Task 2.2a: CSV Ingestion Engine**
  - Use `papaparse` to parse standard CSV files.
  - Parse headers: `full_name`, `email`, `country` (optional), `committee` (optional).
  - Automatically generate a unique `qr_token` (e.g., `DEL-XXXXXX...`) for every valid row.
  - Send the data to a Server Action to perform a fast **Batched Database Insert** instead of individual loops to handle large files rapidly.

- [x] **Task 2.2b: Manual Delegate Creation**
  - Provide an "Add Delegate" button inside the Registry to launch a manual profile creator modal.
  - Automatically generate the `qr_token` and insert the delegate. 

- [x] **Task 2.3: The Delegate Profile Modal (Refinement)**
  - *Refinement:* Manual delegate creation must require the `transaction_id`.
  - *Refinement:* Add explicit confirmations when creating a delegate ("Are you sure you want to add this list/delegate?").
  - *Refinement:* Edit profile functionality must be fully working inside the modal.
  - When clicking a delegate in the Registry, slide out a detailed profile view. This will make the table rows interactive.
  - Display Name, Country, Committee, Email.
  - **Transaction ID Protection:** Every delegate has a `transaction_id`. Display a "View Transaction ID" button. Clicking this must prompt for the financial admin password (`osayeed5889@`). Only upon correct entry will the `transaction_id` be revealed.
  - Display the generated QR Code visually (`qrcode.react`).
  - Fetch and display their Check-In History (When they were scanned, what checkpoint, and by who). Allows identifying exactly who hasn't been scanned for the day.
  - Display Email Status (Sent / Unsent) and a manual "Send Email" button.
  - *Constraint:* Manual "Send Email" MUST require a secondary "Are you sure?" confirmation dialog.
  - *Constraint:* Editing ANY profile information from root MUST require a secondary "Are you sure?" or explicit save step.

- [x] **Task 2.4: Committee Progress & Allocation View**
#commmtiee, when  i click on a commmiee i can check who who is assisned to that commmtiee and who is not assigned or etc. i need to know names and shit. clicking on a name would show me details of that deelgate. where they got checked in or not by who and what not
  - Group all delegates by their assigned `committee`.
  - Show static analytics (e.g., "DISEC: 45 Delegates total").
  - *Dynamic Feed Requirement:* Provide a clear, color-coded visual list indicating who has entered versus who is missing.

- [x] **Task 2.5: Master Scan Log View**
  - A scrolling table showing `delegate_checkins` joined with `secretariat_profiles` and `delegates`.
  - *Purpose:* Lets admins monitor check-in flow in real-time.

- [x] **Task 2.6: Search, Filter & Bulk Actions**
  - Add a robust search bar (Name, Email, Institution) and dropdown filters (Committee, mail_status) to the Registry tab.

- [x] **Task 2.7: Final Data Export (CSV)**
  - Add an "Export to CSV" button in the Registry tab to securely download final attendance sheets and contact lists safely.

- [x] **Task 2.8: Scanner UI Integration & Personal Tracking**
    - [x] Integrate a "View Transaction ID" protected button securely into the active scanning screen (`src/app/portal/scan/page.tsx`).
    - [x] *Refinement:* Show a more detailed "proper profile" overview in the scanner modal.
    - [x] *Refinement:* Add explicit confirmation step ("Do you really want to check in this delegate for day X/checkout Y?") during the scanning flow instead of instantaneous single-tap.
    - [x] *Refinement:* Upgraded Secretariat Dashboard: Allow the currently logged-in secretariat member to see *their* scanning statistics (e.g., how many Day 1 registrations/committees they've processed).
    - [x] *Refinement:* Secretariat personal delegate overview allowing search by name, country, and status scoped by the scanning day.

---

## Phase 3: The Nodemailer Distribution Engine
**Goal:** Build a robust emailing system utilizing Google Workspace SMTP that easily bypasses Vercel's strict timeout limits and securely manages concurrent sending.

- [x] **Task 3.1: Package & Env Setup**
  - Install `nodemailer`.
  - Add `GMAIL_EMAIL` and `GMAIL_APP_PASSWORD` to Vercel/`.env`.

- [x] **Task 3.2: Create the API Endpoint (With Concurrency Control)**
  - Build `src/app/api/admin/mail/route.ts`.
  - Configure the API to generate the exact QR Code base64 image on the server, embed it into a beautiful HTML email template, and dispatch it via Nodemailer (Google Workspace).
  - **Concurrency Lock:** Before processing, use SQL to set `mail_status = 'PROCESSING'`. If it's already processing, abort. Upon success, update `allocation_mail_sent_at` with the timestamp and set `mail_status = 'SENT'`.

- [x] **Task 3.3: Manual Single-Send Integration**
  - Hook up the "Email QR" button inside the Delegate Profile to hit the API route with a single ID.

- [x] **Task 3.4: Batched Bulk-Send Integration (Throttled for Gmail & Vercel)**
  - Build the "Send Pending Mails" master button.
  - *Logic:* The frontend fetches all delegates where `mail_status = 'PENDING'`. It slices them into small chunks of **5 to 10** (not 50) to prevent Vercel Serverless timeouts (10-15s limit) and to avoid immediately triggering Google's rate limits/spam blockers algorithms.
  - *Safety constraint:* Add `window.onbeforeunload` to warn admins "Emails are currently sending. Are you sure you want to leave?" so they don't accidentally close the browser tab.

---

## Rules of Engagement
1. **Handle the active scanner with extreme care:** The `src/app/portal/scan/page.tsx` must not break during these upgrades. Only modify it to safely inject the protected "View Transaction ID" feature.
2. **Lock it down:** CRM features stay behind the `subaru5889@` hardware lock (enforced via API & Middleware). Financial details (Transaction ID) are exclusively protected by a secondary lock (`osayeed5889@`).
3. **No raw data in QR:** Continue heavily enforcing that the QR code only stores the `qr_token` to ensure maximum data privacy.
