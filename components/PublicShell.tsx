import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";

export default function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <header className="public-nav">
        <Logo />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/products?category=Laptop">Laptops</Link>
          <Link href="/services">Services</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <button aria-label="Search"><Search size={17}/></button>
          <Link href="/cart" aria-label="Cart"><ShoppingCart size={17}/></Link>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <Logo dark />
            <p>Elevate Your Tech Experience With Us.</p>
            <p className="footer-muted">Jl. Teknologi No. 123, Indonesia</p>
            <p className="footer-muted">+62 812-3456-7800</p>
            <p className="footer-muted">hello@nerforit.com</p>
          </div>
          <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
          <div><h4>Categories</h4><Link href="/products?category=Laptop">Laptop</Link><Link href="/products">Spare Parts</Link><Link href="/products">Accessories</Link><Link href="/products?category=Monitor">Monitor</Link></div>
        </div>
        <div className="footer-bottom"><span>© 2025 Nerforit. All rights reserved.</span><span>Instagram &nbsp; • &nbsp; TikTok &nbsp; • &nbsp; WhatsApp</span></div>
      </footer>
    </div>
  );
}
