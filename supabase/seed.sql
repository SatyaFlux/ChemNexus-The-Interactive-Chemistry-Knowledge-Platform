-- ====================================================================
-- ChemNexus Optional Seed Data & Verification Queries
-- ====================================================================

-- Verify tables exist and RLS is enabled:
SELECT
  tablename,
  rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

-- Check active RLS policies:
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

