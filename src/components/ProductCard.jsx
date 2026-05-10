import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency.js';

export default function ProductCard({ product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/products/${product.id}`} className="flex h-full flex-col">
        <div className="flex aspect-square items-center justify-center bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 border-t border-slate-100 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              {product.category}
            </p>
            <h2 className="mt-2 line-clamp-2 min-h-12 text-base font-semibold leading-6">
              {product.title}
            </h2>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3">
            <p className="text-lg font-bold">{formatCurrency(product.price)}</p>
            <span className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-sm font-medium text-amber-700">
              <Star size={15} fill="currentColor" aria-hidden="true" />
              {product.rating?.rate ?? '-'}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
