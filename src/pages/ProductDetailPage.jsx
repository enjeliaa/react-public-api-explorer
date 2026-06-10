import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import ErrorState from '../components/ErrorState.jsx';
import { useProductContext } from '../contexts/ProductContext.jsx';
import { formatCurrency } from '../utils/formatCurrency.js';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { products, loading, error, refetchProducts } = useProductContext();
  const product = products.find((item) => item.id === productId);
  const detailError = !loading && !error && !product ? 'Produk tidak ditemukan.' : error;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-bold text-slate-700 transition hover:-translate-x-1 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15 dark:hover:text-white"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Kembali ke produk
      </Link>

      {loading ? <ProductDetailSkeleton /> : null}

      {!loading && detailError ? <ErrorState message={detailError} onRetry={refetchProducts} /> : null}

      {!loading && !detailError && product ? (
        <section className="grid gap-8 border-y border-black/15 py-6 transition-colors dark:border-white/15 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
          <div className="flex h-[32rem] items-center justify-center rounded-lg bg-[#ece7dc] p-8 transition-colors dark:bg-slate-950">
            <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300">
              {product.category}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-none tracking-tight sm:text-6xl">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-3xl font-black">{formatCurrency(product.price)}</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-2 text-sm font-bold text-amber-800">
                <Star size={16} fill="currentColor" aria-hidden="true" />
                {product.rating?.rate ?? '-'} / 5
              </span>
              <span className="rounded-full bg-white/70 px-3 py-2 text-sm font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                {product.rating?.count ?? 0} reviews
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {product.description}
            </p>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ProductDetailSkeleton() {
  return (
    <section className="grid gap-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
      <div className="min-h-80 animate-pulse rounded-lg bg-slate-100 dark:bg-slate-800" />
      <div className="space-y-4">
        <div className="h-4 w-32 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-10 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-10 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-8 w-40 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
      </div>
    </section>
  );
}
