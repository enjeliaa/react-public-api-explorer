import { Search, Sparkles } from 'lucide-react';
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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
        <div className="flex min-h-[360px] flex-col justify-between border-y border-black/15 py-8 dark:border-white/15">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800 dark:border-white/10 dark:bg-white/10 dark:text-emerald-300">
              <Sparkles size={14} aria-hidden="true" />
              Rivelle Store
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#171411] dark:text-white sm:text-6xl lg:text-7xl">
              Everyday pieces with a quiet statement.
            </h1>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
            <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
              Koleksi pakaian pilihan dengan nuansa clean, comfy, dan wearable. Dibuat seperti
              katalog boutique kecil, tetap terhubung dengan data API untuk rating dan review.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Items" value={products.length} />
              <Stat label="Categories" value={STORE_CATEGORIES.length} />
              <Stat label="Drop" value="New" />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-black/10 bg-[#171411] p-5 text-white shadow-soft dark:border-white/10 dark:bg-white">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-[#d9ff63]" />
          <div className="relative grid h-full grid-cols-[0.8fr_1fr] gap-4">
            <div className="flex flex-col justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#171411]">
                Featured
              </p>
              <div>
                <p className="text-4xl font-black leading-none text-[#171411]">24/7</p>
                <p className="mt-2 text-sm font-semibold text-[#171411]/70">daily rotation</p>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-md bg-white p-4 dark:bg-slate-950">
              <img
                src="/products/mens-track-jacket.jpg"
                alt="Featured track jacket"
                className="h-72 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-lg border border-black/10 bg-white/75 p-3 shadow-sm backdrop-blur transition-colors dark:border-white/10 dark:bg-white/10">
        <label className="relative block">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
            aria-hidden="true"
          />
          <span className="sr-only">Cari produk</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the collection..."
            className="h-12 w-full rounded-md border border-transparent bg-[#f4f1ea] pl-11 pr-4 text-sm outline-none transition focus:border-[#171411] focus:bg-white dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-white/40"
          />
        </label>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {['all', ...STORE_CATEGORIES].map((item) => {
            const isActive = category === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`h-10 shrink-0 rounded-md px-4 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#171411] text-white dark:bg-white dark:text-[#171411]'
                    : 'bg-transparent text-slate-600 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/10'
                }`}
              >
                {item === 'all' ? 'All' : item}
              </button>
            );
          })}
        </div>
      </section>

      {loading ? <LoadingState /> : null}
      {!loading && error ? <ErrorState message={error} onRetry={refetchProducts} /> : null}
      {!loading && !error ? <ProductGrid products={filteredProducts} /> : null}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-md bg-white/70 p-3 text-center shadow-sm transition-colors dark:bg-white/10">
      <p className="text-xl font-black text-[#171411] dark:text-slate-50">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}
