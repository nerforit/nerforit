import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { formatIDR } from "@/lib/demo";

type Product = {
  slug: string; name: string; spec: string; price: number; category: string; stock: number; image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-image"><img src={product.image} alt={product.name}/></Link>
      <div className="product-info">
        <span className="chip">{product.category}</span>
        <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
        <p>{product.spec}</p>
        <div className="product-row"><strong>{formatIDR(product.price)}</strong><button aria-label="Add to cart"><ShoppingCart size={15}/></button></div>
      </div>
    </article>
  );
}
