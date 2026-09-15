"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Package, Tags, Boxes, ShoppingBag, Users, BarChart3, FileText, Wrench, Settings, LogOut, Menu } from "lucide-react";
import { supabaseBrowser } from "@/lib/supabase";
import Logo from "./Logo";
import { useState } from "react";

const items = [
  ["/admin", "Dashboard", LayoutDashboard],
  ["/admin/products", "Products", Package],
  ["/admin/categories", "Categories", Tags],
  ["/admin/inventory", "Inventory", Boxes],
  ["/admin/orders", "Orders", ShoppingBag],
  ["/admin/customers", "Customers", Users],
  ["/admin/articles", "Articles", FileText],
  ["/admin/services", "Services", Wrench],
  ["/admin/reports", "Reports", BarChart3],
  ["/admin/settings", "Settings", Settings]
] as const;

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return <>{children}</>;
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await supabaseBrowser().auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-app">
      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="admin-brand"><Logo dark /></div>
        <div className="admin-nav">
          {items.map(([href, label, Icon]) => {
            const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? "active" : ""} onClick={() => setOpen(false)}><Icon size={17}/><span>{label}</span></Link>;
          })}
        </div>
        <button className="admin-logout" onClick={logout}><LogOut size={17}/> Logout</button>
      </aside>
      <div className="admin-main">
        <header className="admin-top"><button className="mobile-menu" onClick={() => setOpen(!open)}><Menu size={20}/></button><div><strong>{pathname === "/admin" ? "Dashboard" : pathname.split("/").filter(Boolean).slice(-1)[0]?.replaceAll("-", " ")}</strong><span>Manage Nerforit</span></div><div className="admin-user"><span className="avatar">A</span><span>Admin</span></div></header>
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
