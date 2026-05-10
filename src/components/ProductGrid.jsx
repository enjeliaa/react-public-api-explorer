import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="font-semibold">Produk tidak ditemukan.</p>
        <p className="mt-2 text-sm text-slate-600">Coba ubah kata kunci atau kategori filter.</p>
      </div>
    );
  }

  return (
    <section className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
