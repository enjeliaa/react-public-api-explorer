import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ErrorState from '../components/ErrorState.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import { getProducts } from '../api/products.js';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  async function fetchProducts() {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengambil data produk.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const categories = useMemo(
    () => ['all', ...new Set(products.map((product) => product.category))],
    [products],
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || product.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Public API Explorer
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Temukan produk dari Fake Store API.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Data produk diambil langsung dari endpoint public API menggunakan useEffect, lengkap
            dengan loading state, error handling, filter, dan halaman detail.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <Stat label="Products" value={products.length} />
          <Stat label="Categories" value={Math.max(categories.length - 1, 0)} />
          <Stat label="Source" value="API" />
        </div>
      </section>

      <section className="mb-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
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
            className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />
        </label>

        <label>
          <span className="sr-only">Pilih kategori</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm capitalize outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item === 'all' ? 'Semua kategori' : item}
              </option>
            ))}
          </select>
        </label>
      </section>

      {loading ? <LoadingState /> : null}
      {!loading && error ? <ErrorState message={error} onRetry={fetchProducts} /> : null}
      {!loading && !error ? <ProductGrid products={filteredProducts} /> : null}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-md bg-slate-50 p-3 text-center">
      <p className="text-xl font-bold text-slate-950">{value}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}
