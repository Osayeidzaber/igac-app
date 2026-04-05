-- ============================================================
-- IGAC Supabase Migration
-- Run this in the Supabase SQL Editor to sync DB with app code
-- ============================================================
-- IMUN Specific Configurations
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_eb_open BOOLEAN DEFAULT false;
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_del_open BOOLEAN DEFAULT true;
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_ca_open BOOLEAN DEFAULT true;
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_eb_url TEXT DEFAULT '';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_del_url TEXT DEFAULT 'https://docs.google.com/forms/d/e/1FAIpQLScXGZ1D1S17Q3eRz5T5J6h2K4F6nN6x8G1lK0k4J4Pz9_W_1w/viewform';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_ca_url TEXT DEFAULT 'https://docs.google.com/forms/d/e/1FAIpQLSd9W8A97XQXYx7rVw8J9Q61lQ_wOW2Q7P1D4PzE4B7vQ5Vxw/viewform';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_registration_deadline TIMESTAMPTZ DEFAULT (NOW() + interval '30 days');
SELECT 'Migration complete!' AS result;
