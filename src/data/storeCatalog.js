export const STORE_CATEGORIES = [
  "Men's Clothing",
  "Women's Clothing",
  "Children's Clothing",
  'Baby Clothing',
];

const STORE_PRODUCTS = [
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
  {
    id: 'women-bell-sleeve-shirt-dress',
    title: 'Bell Sleeve Pleated Shirt Dress',
    category: "Women's Clothing",
    price: 319000,
    image: '/products/women-bell-sleeve-shirt-dress.jpg',
    description:
      'Mini dress cokelat dengan bell sleeve dan detail pleats, cocok untuk tampilan feminine yang elegan.',
  },
  {
    id: 'women-black-ruched-polo-shirt',
    title: 'Black Ruched Polo T-Shirt',
    category: "Women's Clothing",
    price: 169000,
    image: '/products/women-black-ruched-polo-shirt.jpg',
    description:
      'Atasan polo hitam dengan potongan fit dan detail ruched untuk outfit summer yang simple.',
  },
  {
    id: 'women-asymmetric-cross-tee',
    title: 'Asymmetric Cross Graphic Tee',
    category: "Women's Clothing",
    price: 189000,
    image: '/products/women-asymmetric-cross-tee.jpg',
    description:
      'T-shirt asymmetric neck dengan graphic cross, cocok untuk gaya casual streetwear.',
  },
  {
    id: 'women-light-wide-leg-jeans',
    title: 'Light Wash Wide Leg Jeans',
    category: "Women's Clothing",
    price: 289000,
    image: '/products/women-light-wide-leg-jeans.jpg',
    description:
      'Jeans light wash dengan potongan wide leg yang clean dan mudah dipadukan dengan atasan basic.',
  },
  {
    id: 'women-black-tailored-pants',
    title: 'Black Tailored Wide Pants',
    category: "Women's Clothing",
    price: 279000,
    image: '/products/women-black-tailored-pants.jpg',
    description:
      'Celana tailored hitam dengan pleats halus untuk look rapi, minimal, dan tetap nyaman.',
  },
  {
    id: 'women-brown-pleated-skirt',
    title: 'Brown Pleated Mini Skirt',
    category: "Women's Clothing",
    price: 199000,
    image: '/products/women-brown-pleated-skirt.jpg',
    description:
      'Rok mini pleated warna cokelat dengan belt detail untuk gaya preppy yang manis.',
  },
  {
    id: 'children-summer-duo-set',
    title: 'Summer Duo Outfit Set',
    category: "Children's Clothing",
    price: 229000,
    image: '/products/children-summer-duo-set.jpg',
    description:
      'Set outfit anak bernuansa summer dengan dress floral, printed shirt, topi, dan sepatu.',
  },
  {
    id: 'children-matching-denim-set',
    title: 'Matching Denim Kids Set',
    category: "Children's Clothing",
    price: 249000,
    image: '/products/children-matching-denim-set.jpg',
    description:
      'Set matching denim untuk anak dengan pilihan dress dan kemeja, manis untuk sibling outfit.',
  },
  {
    id: 'children-twins-casual-outfit',
    title: 'Twins Casual Weekend Outfit',
    category: "Children's Clothing",
    price: 259000,
    image: '/products/children-twins-casual-outfit.jpg',
    description:
      'Paduan outfit casual anak dengan white shirt, denim, vest, dan sandal untuk aktivitas weekend.',
  },
  {
    id: 'baby-mickey-romper-set',
    title: 'Mickey Baby Romper Set',
    category: 'Baby Clothing',
    price: 159000,
    image: '/products/baby-mickey-romper-set.jpg',
    description:
      'Set romper bayi hitam merah dengan topi matching, lucu untuk outfit harian atau foto kecil.',
  },
  {
    id: 'baby-bear-overall-set',
    title: 'Bear Plush Overall Set',
    category: 'Baby Clothing',
    price: 189000,
    image: '/products/baby-bear-overall-set.jpg',
    description:
      'Set overall bayi berbahan plush dengan karakter bear dan topi lembut bernuansa warm neutral.',
  },
  {
    id: 'baby-vintage-olive-set',
    title: 'Vintage Olive Baby Set',
    category: 'Baby Clothing',
    price: 179000,
    image: '/products/baby-vintage-olive-set.jpg',
    description:
      'Set bayi bergaya vintage dengan dress dan suspender outfit warna olive yang calm dan manis.',
  },
];

export function buildStoreProducts(apiProducts = []) {
  return STORE_PRODUCTS.map((product, index) => {
    const apiProduct = apiProducts[index % apiProducts.length];

    return {
      ...product,
      rating: apiProduct?.rating ?? {
        rate: 4.8,
        count: 120 + index * 18,
      },
    };
  });
}
