import PublicShell from "@/components/PublicShell";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/demo";

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const params = await searchParams;
  const list = params.category ? products.filter(p => p.category === params.category) : products;
  return <PublicShell><main className="page"><h1 className="page-title">Products</h1><p className="page-subtitle">Temukan produk terbaik untuk kebutuhan teknologi Anda.</p>
    <div className="products-layout"><aside className="filters">
      <div className="filter-group"><h4>Categories</h4>{["All Products","Laptop","Spare Parts","Accessories","Monitor"].map((x,i)=><label className="check" key={x}><input type="checkbox" defaultChecked={i===0}/>{x}<span style={{marginLeft:"auto"}}>{i===0?125:[32,58,24,11][i-1] ?? ""}</span></label>)}</div>
      <div className="filter-group"><h4>Price Range</h4>{["1.000.000 - 2.000.000","2.000.000 - 5.000.000","5.000.000 - 7.000.000","7.000.000+"].map(x=><label className="check" key={x}><input type="checkbox"/>{x}</label>)}</div>
      <div className="filter-group"><h4>Brands</h4>{["ASUS","Lenovo","HP","Acer","Dell","MSI"].map(x=><label className="check" key={x}><input type="checkbox"/>{x}</label>)}</div>
    </aside><section><div className="toolbar"><input placeholder="Search product..." /><select><option>Default</option><option>Price Low</option><option>Price High</option></select></div><div className="product-grid">{list.map(p=><ProductCard key={p.id} product={p}/>)}</div><div className="pagination"><button className="active">1</button><button>2</button><button>3</button><button>→</button></div></section></div>
  </main></PublicShell>
}