import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">404</p>
      <h1 className="mt-3 text-4xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-slate-600">
        URL yang dibuka tidak tersedia. Kembali ke halaman produk untuk melanjutkan eksplorasi.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Lihat Produk
      </Link>
    </div>
  );
}
