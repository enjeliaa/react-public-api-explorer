export const STORE_CATEGORIES = [
  "Men's Clothing",
  "Women's Clothing",
  "Children's Clothing",
  'Baby Clothing',
];

const MEN_PRODUCTS = [
  {
    id: 'mens-track-jacket',
    title: 'Troublemakers Track Jacket',
    category: "Men's Clothing",
    price: 329000,
    image: '/products/mens-track-jacket.jpg',
    description:
      'Jaket track hitam dengan panel abu-abu, zipper full, dan potongan relaxed untuk daily streetwear.',
  },
  {
    id: 'mens-black-button-shirt',
    title: 'Black Short Sleeve Button Shirt',
    category: "Men's Clothing",
    price: 249000,
    image: '/products/mens-black-button-shirt.jpg',
    description:
      'Kemeja lengan pendek warna black coffee dengan siluet clean untuk look casual yang tetap rapi.',
  },
  {
    id: 'mens-striped-polo-sweatshirt',
    title: 'Striped Polo Sweatshirt',
    category: "Men's Clothing",
    price: 279000,
    image: '/products/mens-striped-polo-sweatshirt.jpg',
    description:
      'Sweatshirt polo oversized dengan motif garis navy dan cream untuk outfit santai yang standout.',
  },
  {
    id: 'mens-gray-wide-leg-sweatpants',
    title: 'Gray Wide Leg Sweatpants',
    category: "Men's Clothing",
    price: 219000,
    image: '/products/mens-gray-wide-leg-sweatpants.jpg',
    description:
      'Sweatpants abu-abu wide leg dengan waistband drawstring dan bahan nyaman untuk aktivitas harian.',
  },
  {
    id: 'mens-black-trackpants',
    title: 'Black Straight Fit Track Pants',
    category: "Men's Clothing",
    price: 239000,
    image: '/products/mens-black-trackpants.jpg',
    description:
      'Track pants hitam straight fit dengan aksen garis samping, cocok dipakai sebagai set streetwear.',
  },
  {
    id: 'mens-black-wide-leg-jeans',
    title: 'Black Wide Leg Denim Pants',
    category: "Men's Clothing",
    price: 299000,
    image: '/products/mens-black-wide-leg-jeans.jpg',
    description:
      'Celana denim black wash dengan potongan wide leg untuk gaya minimal yang mudah dipadukan.',
  },
];

export function buildStoreProducts(apiProducts = []) {
  return MEN_PRODUCTS.map((product, index) => {
    const apiProduct = apiProducts[index];

    return {
      ...product,
      rating: apiProduct?.rating ?? {
        rate: 4.8,
        count: 120 + index * 18,
      },
    };
  });
}
