import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-black/20 bg-white/70 p-10 text-center dark:border-white/20 dark:bg-white/10">
        <p className="font-semibold">Produk tidak ditemukan.</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Coba ubah kata kunci atau kategori filter.
        </p>
      </div>
    );
  }

  return (
    <section className="grid auto-rows-fr gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
