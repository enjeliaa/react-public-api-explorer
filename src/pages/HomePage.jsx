import { Search } from 'lucide-react';
import ErrorState from '../components/ErrorState.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { useProductContext } from '../contexts/ProductContext.jsx';
import { STORE_CATEGORIES } from '../data/storeCatalog.js';

export default function HomePage() {
  const {
    products,
    filteredProducts,
    loading,
    error,
    query,
    setQuery,
    category,
    setCategory,
    refetchProducts,
  } = useProductContext();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Rivelle Store
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Curated everyday wear for your next rotation.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Koleksi pakaian pilihan dengan tampilan clean, nyaman dipakai, dan mudah dipadukan
            untuk outfit harian.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-3">
          <Stat label="Items" value={products.length} />
          <Stat label="Categories" value={STORE_CATEGORIES.length} />
          <Stat label="Drop" value="New" />
        </div>
      </section>

      <section className="mb-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 md:grid-cols-[1fr_220px]">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
            aria-hidden="true"
          />
          <span className="sr-only">Cari produk</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Cari nama produk..."
            className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-emerald-400 dark:focus:bg-slate-950 dark:focus:ring-emerald-900/40"
          />
        </label>

        <label>
          <span className="sr-only">Pilih kategori</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm capitalize outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-emerald-400 dark:focus:bg-slate-950 dark:focus:ring-emerald-900/40"
          >
            {['all', ...STORE_CATEGORIES].map((item) => (
              <option key={item} value={item}>
                {item === 'all' ? 'Semua kategori' : item}
              </option>
            ))}
          </select>
        </label>
      </section>

      {loading ? <LoadingState /> : null}
      {!loading && error ? <ErrorState message={error} onRetry={refetchProducts} /> : null}
      {!loading && !error ? <ProductGrid products={filteredProducts} /> : null}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-md bg-slate-50 p-3 text-center transition-colors dark:bg-slate-950">
      <p className="text-xl font-bold text-slate-950 dark:text-slate-50">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}
