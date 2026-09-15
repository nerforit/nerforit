import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Headphones, CircleCheck } from "lucide-react";
import PublicShell from "@/components/PublicShell";
import ProductCard from "@/components/ProductCard";
import { products, articles, services } from "@/lib/demo";

export default function Home() {
  return <PublicShell>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Computer Store & Service</p>
        <h1>Elevate Your Tech Experience With Us.</h1>
        <p>Laptop, spare parts, accessories, dan layanan teknologi dengan kualitas terbaik dan harga bersaing.</p>
        <Link className="btn" href="/products">Explore Products <ArrowRight size={15}/></Link>
      </div>
      <div className="hero-visual"><div className="hero-card"/></div>
    </section>
    <section className="trust">
      <div className="trust-item"><div className="trust-icon"><CircleCheck size={14}/></div><div><strong>Produk Original</strong><span>Garansi resmi & terpercaya</span></div></div>
      <div className="trust-item"><div className="trust-icon">Rp</div><div><strong>Harga Terbaik</strong><span>Kualitas tinggi, harga bersaing</span></div></div>
      <div className="trust-item"><div className="trust-icon"><Truck size={14}/></div><div><strong>Pengiriman Cepat</strong><span>Seluruh Indonesia</span></div></div>
      <div className="trust-item"><div className="trust-icon"><Headphones size={14}/></div><div><strong>Layanan Profesional</strong><span>Siap membantu Anda</span></div></div>
    </section>
    <section className="section"><div className="section-head"><div><h2>Featured Products</h2><p>Produk pilihan dengan kualitas terbaik untuk kebutuhan teknologi Anda.</p></div><Link className="text-link" href="/products">Lihat Semua →</Link></div><div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
    <section className="service-band"><div><p className="eyebrow">Our Services</p><h2>Kami siap membantu kebutuhan perangkat Anda dengan layanan profesional dan terpercaya.</h2><Link className="btn btn-dark" href="/services">Lihat Semua Layanan <ArrowRight size={14}/></Link></div><div className="service-cards">{services.map(s=><div className="service-card" key={s.title}><strong>✦</strong><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>
    <section className="section"><div className="section-head"><div><h2>Latest Articles</h2><p>Tips, panduan, dan informasi seputar teknologi.</p></div><Link className="text-link" href="/articles">Lihat Semua →</Link></div><div className="articles">{articles.map(a=><Link className="article-card" href={`/articles/${a.slug}`} key={a.id}><img src={a.image} alt={a.title}/><div><span>{a.date} · {a.category}</span><h3>{a.title}</h3></div></Link>)}</div></section>
  </PublicShell>
}