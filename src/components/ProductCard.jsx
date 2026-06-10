import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency.js';

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-[520px] flex-col overflow-hidden rounded-lg border border-black/10 bg-white/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/[0.14]">
      <Link to={`/products/${product.id}`} className="flex h-full flex-col">
        <div className="relative flex h-80 shrink-0 items-center justify-center overflow-hidden bg-[#ece7dc] p-6 transition-colors dark:bg-slate-950">
          <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur dark:bg-white/10 dark:text-slate-200">
            {product.category}
          </span>
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#d9ff63] text-[#171411] transition group-hover:rotate-45">
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 border-t border-black/10 p-5 dark:border-white/10">
          <div>
            <h2 className="line-clamp-2 min-h-14 text-xl font-black leading-7 tracking-tight text-[#171411] dark:text-white">
              {product.title}
            </h2>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {product.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3">
            <p className="text-xl font-black">{formatCurrency(product.price)}</p>
            <span className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 text-sm font-bold text-amber-800">
              <Star size={15} fill="currentColor" aria-hidden="true" />
              {product.rating?.rate ?? '-'}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
