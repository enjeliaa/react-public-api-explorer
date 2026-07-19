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
      <section className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-stretch">
        <div className="flex min-h-[390px] flex-col justify-between border-y border-black/15 py-9 dark:border-white/15">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#3f5d4a] shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-[#b7d7c2]">
              <Sparkles size={14} aria-hidden="true" />
              Rivelle Atelier
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[0.96] tracking-tight text-[#171411] dark:text-white sm:text-6xl lg:text-7xl">
              Quiet essentials, styled with intention.
            </h1>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-[1fr_280px] md:items-end">
            <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300">
              Koleksi pakaian dengan visual yang clean, nyaman dipakai, dan terasa seperti katalog
              boutique pribadi. Data rating tetap terhubung dari API, sementara kurasi produk
              dibuat khusus untuk Rivelle.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <Stat label="Items" value={products.length} />
              <Stat label="Categories" value={STORE_CATEGORIES.length} />
              <Stat label="Drop" value="New" />
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-black/10 bg-[#171411] p-4 text-white shadow-soft dark:border-white/10 dark:bg-white/10">
          <div className="grid h-full min-h-[390px] grid-rows-[1fr_auto] gap-4">
            <div className="flex items-center justify-center rounded-md bg-[#ece7dc] p-5 dark:bg-slate-950">
              <img
                src="/products/mens-track-jacket.jpg"
                alt="Featured track jacket"
                className="h-72 w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-[1fr_auto] items-end gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b7d7c2]">
                  Featured edit
                </p>
                <p className="mt-2 text-2xl font-black tracking-tight">Trackwear, softened.</p>
              </div>
              <p className="text-right text-xs font-semibold leading-5 text-white/65">
                new daily
                <br />
                rotation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 rounded-lg border border-black/10 bg-white p-3 shadow-sm transition-colors dark:border-white/10 dark:bg-white/10">
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
            className="h-12 w-full rounded-md border border-transparent bg-[#f0f2ec] pl-11 pr-4 text-sm outline-none transition focus:border-[#3f5d4a] focus:bg-white dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-white/40"
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
                    : 'bg-transparent text-slate-600 hover:bg-[#f0f2ec] dark:text-slate-300 dark:hover:bg-white/10'
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
      {!loading && !error ? (
        <>
          <section className="mb-5 flex flex-col gap-3 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#3f5d4a] dark:text-[#b7d7c2]">
                Collection
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Latest curation</h2>
            </div>
            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {filteredProducts.length} item{filteredProducts.length === 1 ? '' : 's'} shown
            </p>
          </section>
          <ProductGrid products={filteredProducts} />
        </>
      ) : null}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-md bg-white p-3 text-center shadow-sm transition-colors dark:bg-white/10">
      <p className="text-xl font-black text-[#171411] dark:text-slate-50">{value}</p>
      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}
