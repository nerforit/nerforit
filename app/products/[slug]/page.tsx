import PublicShell from "@/components/PublicShell";
import { products, formatIDR } from "@/lib/demo";
import { ShoppingCart, ShieldCheck, Truck, CreditCard, Star } from "lucide-react";
import Link from "next/link";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug) ?? products[0];
  return <PublicShell><main className="detail"><div className="crumb">Home &nbsp;›&nbsp; Products &nbsp;›&nbsp; {product.name}</div><div className="detail-top">
    <div className="gallery"><img src={product.image} alt={product.name}/></div>
    <div className="detail-box"><h1>{product.name}</h1><div className="spec">{product.spec}</div><div className="price">{formatIDR(product.price)}</div><span className="stock">Stok Tersedia</span><div className="rating"><Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> &nbsp; {product.rating} (124 ulasan)</div><div className="qty"><button>−</button><strong>1</strong><button>+</button></div><button className="btn btn-dark wide-btn"><ShoppingCart size={15}/> Tambah ke Keranjang</button><Link className="btn wide-btn" href="/contact">Chat via WhatsApp</Link></div></div>
    <div className="feature-row"><div><ShieldCheck size={17}/><strong>Garansi Resmi</strong><br/>1 Tahun</div><div><Truck size={17}/><strong>Pengiriman Cepat</strong><br/>Seluruh Indonesia</div><div><CreditCard size={17}/><strong>Pembayaran Aman</strong><br/>Transfer / COD</div></div>
    <div className="detail-tabs"><strong>Deskripsi</strong><p>{product.name} hadir dengan performa andal, desain modern, dan spesifikasi yang cocok untuk kerja, kuliah, maupun hiburan.</p><ul><li>Performa responsif untuk kebutuhan harian</li><li>Komponen berkualitas dan mudah dirawat</li><li>Garansi resmi</li><li>Windows 11 Home</li></ul></div>
  </main></PublicShell>
}