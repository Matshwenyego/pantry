import {create} from 'zustand';

interface CartState {
  cartItems: Array<any>;
  cartInfo: any;
  addItem: (product: any) => void;
  subtractItem: (product: any) => void;
  removeItem: (product: any) => void;
}

const useCartStore = create<CartState>(set => ({
  cartItems: [],
  cartInfo: {
    total: 0,
    count: 0,
  },
  addItem: product =>
    set(state => {
      const index = state.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        const newCartItems = state.cartItems;
        newCartItems[index] = {
          ...newCartItems[index],
          count: newCartItems[index].count + 1,
        };
        return {
          cartItems: newCartItems,
          cartInfo: {
            total: newCartItems.reduce(
              (total, item) => total + item.count * item.price,
              0,
            ),
            count: newCartItems.reduce((total, item) => total + item.count, 0),
          },
        };
      }

      return {
        cartItems: [...state.cartItems, {...product, count: 1}],
        cartInfo: {
          total:
            state?.cartItems?.length < 1
              ? product.price
              : state.cartInfo.total + product.price,
          count:
            state?.cartItems?.length < 1
              ? 1
              : state.cartInfo.count + 1,
        },
      };
    }),
  subtractItem: (product: any) =>
    set(state => {
      const index = state.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        const newCartItems = state.cartItems;

        if (newCartItems[index].count === 1) {
          newCartItems.splice(index, 1);
          return {
            cartItems: newCartItems,
            cartInfo: {
              total: newCartItems.reduce(
                (total, item) => total + item.count * item.price,
                0,
              ),
              count: newCartItems.reduce(
                (total, item) => total - item.count,
                0,
              ),
            },
          };
        }

        newCartItems[index] = {
          ...newCartItems[index],
          count: newCartItems[index].count - 1,
        };

        console.log({count: state.cartInfo.total})

        return {
          cartItems: newCartItems,
          cartInfo: {
            total: newCartItems.reduce(
              (total, item) => total + item.count * item.price,
              0,
            ),
            count: state.cartInfo.count - 1,
          },
        };
      }
      return {state};
    }),
  removeItem: (product: any) =>
    set(state => {
      const index = state.cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        const newCartItems = state.cartItems;
        newCartItems.splice(index, 1);
        return {
          cartItems: newCartItems,
          cartInfo: {
            total: newCartItems.reduce(
              (total, item) => total + item.count * item.price,
              0,
            ),
            count: newCartItems.reduce((total, item) => total - item.count, 0),
          },
        };
      }
      return {state};
    }),
}));

export default useCartStore;
