# Firebase to Supabase Migration

This project has been migrated from Firebase to Supabase for authentication and database operations.

## Changes Made

1. **Dependencies**: 
   - Added Supabase JS client: `@supabase/supabase-js`

2. **Configuration**:
   - Created `src/supabase/supabase.js` with Supabase client initialization
   - Updated environment variables in `.env` (see `.env.example`)

3. **Authentication**:
   - Replaced Firebase Authentication with Supabase Auth
   - Updated login, signup, and password reset flows
   - Google OAuth flow has been updated

4. **Database**:
   - Replaced Firestore operations with Supabase database operations
   - Collection `subscribers` is now a Supabase table

## Required Environment Variables

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Database Setup

Create the following tables in your Supabase project:

### subscribers
- `id`: uuid (primary key, default: uuid_generate_v4())
- `created_at`: timestamp with time zone (default: now())
- `email`: text (not null)

## Auth Setup

1. Enable Email auth in Supabase Authentication settings
2. Configure Google OAuth provider in Supabase Authentication settings
3. Set up proper redirect URLs 