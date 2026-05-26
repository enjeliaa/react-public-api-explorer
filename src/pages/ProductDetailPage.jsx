import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import ErrorState from '../components/ErrorState.jsx';
import { useProductDetail } from '../hooks/useProductDetail.js';
import { formatCurrency } from '../utils/formatCurrency.js';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { product, loading, error, refetchProductDetail } = useProductDetail(productId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Kembali ke produk
      </Link>

      {loading ? <ProductDetailSkeleton /> : null}

      {!loading && error ? <ErrorState message={error} onRetry={refetchProductDetail} /> : null}

      {!loading && !error && product ? (
        <section className="grid gap-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="flex h-[28rem] items-center justify-center rounded-lg bg-slate-50 p-8">
            <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{product.title}</h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <p className="text-3xl font-bold">{formatCurrency(product.price)}</p>
              <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700">
                <Star size={16} fill="currentColor" aria-hidden="true" />
                {product.rating?.rate ?? '-'} / 5
              </span>
              <span className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
                {product.rating?.count ?? 0} reviews
              </span>
            </div>

            <p className="mt-6 leading-8 text-slate-600">{product.description}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ProductDetailSkeleton() {
  return (
    <section className="grid gap-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
      <div className="min-h-80 animate-pulse rounded-lg bg-slate-100" />
      <div className="space-y-4">
        <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
        <div className="h-10 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-10 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="h-8 w-40 animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
      </div>
    </section>
  );
}
