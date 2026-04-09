-- supabase_crm_update.sql
-- Run this in your Supabase SQL Editor to prepare for the CRM / Operations Hub

-- 1. Create a custom ENUM type for mail status
DO $$ BEGIN
    CREATE TYPE mail_status_enum AS ENUM ('PENDING', 'PROCESSING', 'SENT', 'FAILED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. Add columns to track email delivery and concurrency locking
ALTER TABLE delegates ADD COLUMN IF NOT EXISTS allocation_mail_sent_at TIMESTAMP WITH TIME ZONE DEFAULT NULL;
ALTER TABLE delegates ADD COLUMN IF NOT EXISTS mail_status mail_status_enum DEFAULT 'PENDING';

-- 3. Create indexes to guarantee lightning-fast QR scanning during peak hours
CREATE INDEX IF NOT EXISTS idx_delegates_qr_token ON delegates(qr_token);
CREATE INDEX IF NOT EXISTS idx_delegates_mail_status ON delegates(mail_status);
CREATE INDEX IF NOT EXISTS idx_checkins_delegate_id ON delegate_checkins(delegate_id);
CREATE INDEX IF NOT EXISTS idx_checkins_day_checkpoint ON delegate_checkins(day, checkpoint);
