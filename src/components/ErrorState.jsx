import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-900">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <AlertTriangle className="mt-1 shrink-0" size={22} aria-hidden="true" />
          <div>
            <p className="font-semibold">Data gagal dimuat</p>
            <p className="mt-1 text-sm text-red-800">{message}</p>
          </div>
        </div>

        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            <RefreshCw size={16} aria-hidden="true" />
            Coba Lagi
          </button>
        ) : null}
      </div>
    </div>
  );
}
