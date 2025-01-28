import {create} from 'zustand';
import {ImageProps} from 'react-native';

interface CartItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: ImageProps;
  count: number;
}

interface CartInfo {
  total: number;
  count: number;
}

interface CartState {
  cartItems: CartItem[];
  cartInfo: CartInfo;
  addItem: (product: CartItem) => void;
  subtractItem: (product: CartItem) => void;
  removeItem: (product: CartItem) => void;
}

const calculateCartInfo = (cartItems: CartItem[]): CartInfo => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.count * item.price,
    0,
  );
  const count = cartItems.reduce((sum, item) => sum + item.count, 0);

  return {total, count};
};

const useCartStore = create<CartState>(set => ({
  cartItems: [],
  cartInfo: {
    total: 0,
    count: 0,
  },
  addItem: (product: CartItem) =>
    set(state => {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === product.id,
      );
      let updatedCartItems;

      if (existingItemIndex !== -1) {
        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          count: updatedCartItems[existingItemIndex].count + 1,
        };
      } else {
        updatedCartItems = [...state.cartItems, {...product, count: 1}];
      }

      return {
        cartItems: updatedCartItems,
        cartInfo: calculateCartInfo(updatedCartItems),
      };
    }),
  subtractItem: (product: CartItem) =>
    set(state => {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === product.id,
      );
      if (existingItemIndex === -1) return state;

      const updatedCartItems = [...state.cartItems];
      const targetItem = updatedCartItems[existingItemIndex];

      if (targetItem.count === 1) {
        updatedCartItems.splice(existingItemIndex, 1);
      } else {
        updatedCartItems[existingItemIndex] = {
          ...targetItem,
          count: targetItem.count - 1,
        };
      }

      return {
        cartItems: updatedCartItems,
        cartInfo: calculateCartInfo(updatedCartItems),
      };
    }),
  removeItem: (product: CartItem) =>
    set(state => {
      const updatedCartItems = state.cartItems.filter(
        item => item.id !== product.id,
      );

      return {
        cartItems: updatedCartItems,
        cartInfo: calculateCartInfo(updatedCartItems),
      };
    }),
}));

export default useCartStore;
