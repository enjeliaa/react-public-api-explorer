# Public API Explorer

Website React sederhana untuk mengeksplorasi produk dari Fake Store API. Project ini dibuat untuk tugas Midterm Frontend Development GDGoC: Side Effects & Data Fetching dengan `useEffect`.

## Tech Stack

- React + Vite
- JavaScript
- Tailwind CSS
- React Router
- Fake Store API

## Menjalankan Project

1. Install dependency:

   ```bash
   npm install
   ```

2. Salin `.env.example` menjadi `.env`, lalu isi:

   ```env
   VITE_API_BASE_URL=https://fakestoreapi.com
   ```

3. Jalankan development server:

   ```bash
   npm run dev
   ```

4. Build production:

   ```bash
   npm run build
   ```

## Fitur

- Menampilkan daftar produk dari Public API.
- Halaman detail produk berdasarkan ID.
- Search dan filter kategori.
- Loading state saat fetch data.
- Error handling saat request gagal.
- Responsive layout menggunakan Tailwind CSS.
