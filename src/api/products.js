const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function getApiBaseUrl() {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL belum diatur di file .env');
  }

  return API_BASE_URL.replace(/\/$/, '');
}

async function request(endpoint) {
  const response = await fetch(`${getApiBaseUrl()}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request gagal dengan status ${response.status}`);
  }

  return response.json();
}

export function getProducts() {
  return request('/products');
}

export function getProductById(productId) {
  return request(`/products/${productId}`);
}
