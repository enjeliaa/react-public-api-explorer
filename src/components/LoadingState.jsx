export default function LoadingState({ message = 'Mengambil data dari API...' }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10"
        >
          <div className="h-80 animate-pulse bg-[#ece7dc] dark:bg-slate-800" />
          <div className="space-y-3 p-5">
            <div className="h-3 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            <div className="h-6 w-28 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      ))}
      <span className="sr-only">{message}</span>
    </div>
  );
}
