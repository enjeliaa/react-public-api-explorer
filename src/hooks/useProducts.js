import { useCallback, useEffect, useMemo, useState } from 'react';
import { getProducts } from '../api/products.js';
import { buildStoreProducts } from '../data/storeCatalog.js';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      setProducts(buildStoreProducts(data));
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengambil data produk.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery = product.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || product.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [products, query, category]);

  return {
    products,
    filteredProducts,
    loading,
    error,
    query,
    setQuery,
    category,
    setCategory,
    refetchProducts: fetchProducts,
  };
}
