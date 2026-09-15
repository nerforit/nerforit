# Nerforit 2.0

A polished Next.js + Supabase + Vercel foundation based on the approved Nerforit mockup.

## Included
- Public storefront UI: Home, Products, Product Detail, Cart, Checkout, Services, Articles, About, Contact
- Separate dark Admin UI: Dashboard, Products, Categories, Inventory, Orders, Customers, Articles, Services, Reports, Settings
- Supabase Auth-ready admin login
- Middleware protection for `/admin`
- Supabase schema with products, categories, customers, orders, order_items, articles, services, profiles and storage
- Responsive desktop/mobile layouts
- Local SVG product visuals so the site does not depend on external image URLs

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Fill Supabase URL and anon key
4. Run `supabase/schema.sql` in Supabase SQL Editor
5. Create an Auth user in Supabase Authentication
6. Insert/update that user's row in `profiles` with `role = 'admin'`
7. `npm run dev`

## Vercel
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: leave empty
- Install Command: `npm install`
- Root Directory: `./`
- Add the same environment variables in Vercel.

## Important
The visual system and routing are ready. Product/order CRUD screens are currently UI-first and use demo data until their forms are connected to Supabase mutations. The admin login is wired to Supabase Auth and `/admin` is protected by middleware.
