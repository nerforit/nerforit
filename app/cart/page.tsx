import PublicShell from "@/components/PublicShell";
import { products, formatIDR } from "@/lib/demo";
import Link from "next/link";

export default function Cart() {
 const p = products[0];
 return <PublicShell><main className="page"><h1 className="page-title">Shopping Cart</h1><p className="page-subtitle">Periksa kembali produk sebelum checkout.</p><div className="cart-list"><div className="cart-item"><img src={p.image} alt={p.name}/><div><strong>{p.name}</strong><p className="page-subtitle">{p.spec}</p></div><strong>{formatIDR(p.price)}</strong></div></div><div style={{display:"flex",justifyContent:"flex-end",marginTop:15}}><Link className="btn btn-dark" href="/checkout">Lanjut Checkout →</Link></div></main></PublicShell>
}