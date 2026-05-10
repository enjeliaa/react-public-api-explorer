# Rivelle Store

Website React sederhana untuk katalog clothing store pribadi. Project ini tetap menggunakan Fake Store API sebagai sumber data remote untuk memenuhi tugas Midterm Frontend Development GDGoC: Side Effects & Data Fetching dengan `useEffect`.

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

- Menampilkan katalog produk clothing store.
- Halaman detail produk berdasarkan ID.
- Search dan filter kategori: Men's Clothing, Women's Clothing, Children's Clothing, dan Baby Clothing.
- Kartu produk dibuat rata dengan ukuran gambar yang konsisten.
- Loading state saat fetch data.
- Error handling saat request gagal.
- Responsive layout menggunakan Tailwind CSS.
