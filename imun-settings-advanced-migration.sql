-- ============================================================
-- IGAC Supabase Migration - IMUN Advanced Settings (Venues, Timers, Decorums)
-- Run this in the Supabase SQL Editor to sync DB with app code
-- ============================================================

-- Timers for Committees and Events
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_committees_timer TIMESTAMPTZ DEFAULT (NOW() + interval '30 days');

-- Info Section Settings
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_date_value TEXT DEFAULT 'Secret';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_date_sub TEXT DEFAULT 'Will be revealed soon';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_venue_value TEXT DEFAULT 'To Be Announced';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_venue_sub TEXT DEFAULT 'A Premium Location';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_schedule_value TEXT DEFAULT 'In Preparation';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_schedule_sub TEXT DEFAULT 'Curating the agenda';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_band_value TEXT DEFAULT 'Classified';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_info_band_sub TEXT DEFAULT 'An exclusive performance';

-- Academic Venue Settings
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_academic_venue_secret BOOLEAN DEFAULT false;
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_academic_venue_name TEXT DEFAULT 'American International University-Bangladesh (AIUB)';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_academic_venue_desc TEXT DEFAULT 'The crucible of debate. This prestigious academic setting hosts the intense committee sessions and matrices where global resolutions are forged. A campus dedicated to excellence and innovation forms the perfect backdrop for our academically rigorous sessions.';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_academic_venue_image TEXT DEFAULT '/venue-academic.jpg';

-- Closing Ceremony Venue Settings
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_closing_venue_secret BOOLEAN DEFAULT true;
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_closing_venue_name TEXT DEFAULT 'To Be Revealed...';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_closing_venue_desc TEXT DEFAULT 'The grand finale''s location remains a closely guarded secret. A culmination of days of rigorous discourse, hosted in an elegant masterpiece. The countdown has begun for the ultimate revelation.';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_closing_venue_image TEXT DEFAULT '/venue-closing.jpg';

-- Day Three Schedule Changes
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_day3_gala_access TEXT DEFAULT 'Everyone but Classified';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_day3_gala_desc TEXT DEFAULT '[ CLASSIFIED ] The final venue and itinerary will be revealed to delegates.';

-- The Code of Conduct / The Aesthetics of Power
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_decorum_title TEXT DEFAULT 'The Aesthetics of Power';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_decorum_desc TEXT DEFAULT 'Appearance dictates authority. The Imperial Code of Decorum is one of the strictest in the global circuit. We do not view dress code as a suggestion—it is an absolute mandate. Gentlemen are expected in full western formal attire—tailored suits, sober ties, and polished oxford shoes. Ladies are expected in conservative, elegant formalwear. Casual elements are unconditionally prohibited on the diplomatic floor.';

-- Transparency / Investment & Return
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_investment_title TEXT DEFAULT 'Investment & Return';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS imun_investment_desc TEXT DEFAULT 'Participation in Session II is a serious investment in your diplomatic and professional future. The delegate fee is structured to guarantee a completely uncompromising, luxurious experience. All Comprehensive Conference Materials, Exclusive Premium Delegate Kit, VIP Access to Grand Closing Ceremony. Every resource goes directly into elevating the production value, the venue, and the prestige of the event itself.';

SELECT 'Advanced IMUN Migration complete!' AS result;
