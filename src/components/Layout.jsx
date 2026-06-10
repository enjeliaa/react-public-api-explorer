import { Outlet, Link } from 'react-router-dom';
import { Moon, ShoppingBag, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext.jsx';

export default function Layout() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#171411] transition-colors dark:bg-[#080a0d] dark:text-slate-50">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f4f1ea]/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#080a0d]/85">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#171411] text-white transition group-hover:bg-emerald-700 dark:bg-white dark:text-[#171411] dark:group-hover:bg-emerald-300">
              <ShoppingBag size={20} aria-hidden="true" />
            </span>
            <span className="text-lg">Rivelle</span>
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/70 text-[#171411] shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
            aria-label={isDarkMode ? 'Aktifkan light mode' : 'Aktifkan dark mode'}
            title={isDarkMode ? 'Light mode' : 'Dark mode'}
          >
            {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
