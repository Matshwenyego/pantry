import {create} from 'zustand';
// import { devtools, persist } from 'zustand/middleware'
// import type {} from '@redux-devtools/extension' // required for devtools typing
import {categories, products} from './data/data';

interface ProductsState {
  products: Array<any>;
  filteredProducts: Array<any>;
  categories: Array<any>;
  options: Array<string>;
  filter: (category: string) => void;
}

const useProductsStore = create<ProductsState>(set => ({
  products,
  filteredProducts: products,
  categories,
  options: ['All'],
  filter: category =>
    set(state => {

      if (category === 'All') {
        return {
          filteredProducts: products,
          options: ['All'],
        }
      }

      const exists = state.options.includes(category);
      const options = exists
        ? state.options.filter(item => item !== category)
        : state.options.includes('All') ? [category] : [...state.options, category];

      return {
        filteredProducts: state.products.filter(item =>
          options.includes(item.category),
        ),
        options,
      };
    }),
  //   filter: (category) => set(state => ({sorted_products: state.products.filter((item) => item.category === category)})),
  //   filteredProducts: (category: Array<string>) => set(state => ({products: state.products})),
}));

// category =>

export default useProductsStore;
