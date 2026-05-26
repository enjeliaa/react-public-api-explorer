import { useCallback, useEffect, useState } from 'react';
import { getProducts } from '../api/products.js';
import { buildStoreProducts } from '../data/storeCatalog.js';

export function useProductDetail(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProductDetail = useCallback(async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      const selectedProduct = buildStoreProducts(data).find((item) => item.id === productId);

      if (!selectedProduct) {
        throw new Error('Produk tidak ditemukan.');
      }

      setProduct(selectedProduct);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat mengambil detail produk.');
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  return {
    product,
    loading,
    error,
    refetchProductDetail: fetchProductDetail,
  };
}
