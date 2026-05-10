import { Outlet, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f6f7f2] text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 font-semibold">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white">
              <ShoppingBag size={20} aria-hidden="true" />
            </span>
            <span>Rivelle Store</span>
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
