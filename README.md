# Nerforit Full Stack

Next.js + Supabase + Vercel starter with separate Public and Admin UI.

1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Put Supabase URL + anon key into `.env.local`
4. Run `supabase/schema.sql` in Supabase SQL Editor
5. Create an Auth user and set its profile role to `admin`
6. Deploy to Vercel and add the same environment variables.

Public: `/`, `/products`, `/services`, `/articles`, `/about`, `/contact`
Admin: `/admin`, `/admin/login`, `/admin/products`, `/admin/orders`, `/admin/customers`, `/admin/articles`, `/admin/services`, `/admin/reports`, `/admin/settings`
