import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { getSupabaseProducts, seedSupabaseProducts } from '../api/supabaseProducts.js';
import { getProducts } from '../api/products.js';
import { buildStoreProducts } from '../data/storeCatalog.js';

export function useProducts() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['products-catalog'],
    queryFn: async () => {
      try {
        const supabaseItems = await getSupabaseProducts();

        // Hapus item tes seperti "kaos gdg"
        const cleanItems = (supabaseItems || []).filter(
          (item) => !item.title?.toLowerCase().includes('kaos gdg')
        );

        if (cleanItems.length > 0) {
          return cleanItems.map((item, index) => ({
            id: String(item.id),
            title: item.title,
            category: item.category || "Men's Clothing",
            price: typeof item.price === 'string' ? parseFloat(item.price) : item.price,
            image: item.image || '/products/mens-track-jacket.jpg',
            description: item.description || '',
            rating: {
              rate: 4.8,
              count: 120 + index * 10,
            },
          }));
        }
      } catch (err) {
        console.warn('Supabase fallback:', err.message);
      }

      // Ambil katalog produk standar
      const apiData = await getProducts();
      const storeItems = buildStoreProducts(apiData);

      // Otomatis seed katalog ke database Supabase jika kosong
      try {
        const seedPayload = storeItems.map((prod) => ({
          title: prod.title,
          category: prod.category,
          price: prod.price,
          image: prod.image,
          description: prod.description,
        }));
        await seedSupabaseProducts(seedPayload);
      } catch (e) {
        // Abaikan error seed jika RLS membatasi
      }

      return storeItems.map((item) => ({
        ...item,
        id: String(item.id),
      }));
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        category === 'all' || product.category.toLowerCase() === category.toLowerCase();

      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  return {
    products,
    filteredProducts,
    loading: isLoading,
    error: isError ? error?.message || 'Gagal mengambil data' : '',
    query,
    setQuery,
    category,
    setCategory,
    refetchProducts: refetch,
  };
}
