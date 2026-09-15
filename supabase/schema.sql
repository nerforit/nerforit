create extension if not exists "pgcrypto";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'customer' check (role in ('admin','customer')),
  created_at timestamptz not null default now()
);

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  sku text unique,
  description text,
  specifications jsonb not null default '{}'::jsonb,
  price numeric(14,2) not null default 0,
  stock integer not null default 0,
  min_stock integer not null default 5,
  image_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists customers (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid references auth.users(id) on delete set null,
  name text not null,
  email text,
  phone text,
  address text,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references customers(id) on delete set null,
  order_number text not null unique,
  status text not null default 'pending' check (status in ('pending','paid','processing','shipped','completed','cancelled')),
  payment_method text,
  subtotal numeric(14,2) not null default 0,
  shipping_cost numeric(14,2) not null default 0,
  total numeric(14,2) not null default 0,
  shipping_address text,
  created_at timestamptz not null default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  price numeric(14,2) not null,
  quantity integer not null check (quantity > 0),
  subtotal numeric(14,2) not null
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  category text,
  cover_url text,
  is_published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  icon text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

alter table profiles enable row level security;
alter table categories enable row level security;
alter table products enable row level security;
alter table customers enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table articles enable row level security;
alter table services enable row level security;

drop policy if exists "profiles own read" on profiles;
create policy "profiles own read" on profiles for select using (id = auth.uid() or public.is_admin());

drop policy if exists "public categories read" on categories;
create policy "public categories read" on categories for select using (true);
drop policy if exists "public products read" on products;
create policy "public products read" on products for select using (is_active = true);
drop policy if exists "public articles read" on articles;
create policy "public articles read" on articles for select using (is_published = true);
drop policy if exists "public services read" on services;
create policy "public services read" on services for select using (is_active = true);

do $$
begin
  if not exists (select 1 from pg_policies where policyname = 'admin categories all' and tablename = 'categories') then
    create policy "admin categories all" on categories for all using (public.is_admin()) with check (public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where policyname = 'admin products all' and tablename = 'products') then
    create policy "admin products all" on products for all using (public.is_admin()) with check (public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where policyname = 'admin customers all' and tablename = 'customers') then
    create policy "admin customers all" on customers for all using (public.is_admin()) with check (public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where policyname = 'admin orders all' and tablename = 'orders') then
    create policy "admin orders all" on orders for all using (public.is_admin()) with check (public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where policyname = 'admin order items all' and tablename = 'order_items') then
    create policy "admin order items all" on order_items for all using (public.is_admin()) with check (public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where policyname = 'admin articles all' and tablename = 'articles') then
    create policy "admin articles all" on articles for all using (public.is_admin()) with check (public.is_admin());
  end if;
  if not exists (select 1 from pg_policies where policyname = 'admin services all' and tablename = 'services') then
    create policy "admin services all" on services for all using (public.is_admin()) with check (public.is_admin());
  end if;
end $$;

insert into storage.buckets (id, name, public)
values ('nerforit-media', 'nerforit-media', true)
on conflict (id) do nothing;

drop policy if exists "public media read" on storage.objects;
create policy "public media read" on storage.objects for select using (bucket_id = 'nerforit-media');
drop policy if exists "admin media insert" on storage.objects;
create policy "admin media insert" on storage.objects for insert with check (bucket_id = 'nerforit-media' and public.is_admin());
drop policy if exists "admin media update" on storage.objects;
create policy "admin media update" on storage.objects for update using (bucket_id = 'nerforit-media' and public.is_admin());
drop policy if exists "admin media delete" on storage.objects;
create policy "admin media delete" on storage.objects for delete using (bucket_id = 'nerforit-media' and public.is_admin());

insert into categories(name,slug) values
('Laptop','laptop'),('Spare Parts','spare-parts'),('Accessories','accessories'),('Monitor','monitor'),('SSD','ssd'),('RAM','ram')
on conflict (slug) do nothing;
