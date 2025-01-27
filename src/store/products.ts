import { create } from 'zustand';
import {ImageProps} from 'react-native';
import { categories, products } from './data/data';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: ImageProps;
  count: number;
}

interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  options: string[];
  filter: (category: string) => void;
}

const useProductsStore = create<ProductsState>((set, get) => ({
  products,
  filteredProducts: products,
  categories,
  options: ['All'],
  filter: (category: string) => {
    const { options, products } = get();
    if (category === 'All') {
      set({
        filteredProducts: products,
        options: ['All'],
      });
      return;
    }

    const isCategorySelected = options.includes(category);
    const updatedOptions = isCategorySelected
      ? options.filter((item) => item !== category)
      : options.includes('All')
      ? [category]
      : [...options, category];

    const filteredProducts = products.filter((product) =>
      updatedOptions.includes(product.category)
    );

    set({
      filteredProducts,
      options: updatedOptions.length > 0 ? updatedOptions : ['All'],
    });
  },
}));

export default useProductsStore;
