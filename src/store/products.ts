import {create} from 'zustand';
import {ImageProps} from 'react-native';
import {categories, products} from './data/data';

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

const useProductsStore = create<ProductsState>(set => ({
  products,
  filteredProducts: products,
  categories,
  options: ['All'],
  filter: (category: string) => set(state => {
    if (category === 'All') {
      return {
        filteredProducts: state.products,
        options: ['All'],
      };
    }

    const isCategorySelected = state.options.includes(category);
    const updatedOptions = isCategorySelected
      ? state.options.filter(item => item !== category)
      : state.options.includes('All')
      ? [category]
      : [...state.options, category];

    const filteredProducts = products.filter(product =>
      updatedOptions.includes(product.category),
    );

    return {
      filteredProducts,
      options: updatedOptions.length > 0 ? updatedOptions : ['All'],
    };
  }),
}));

export default useProductsStore;
