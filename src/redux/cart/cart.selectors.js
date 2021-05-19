import { createSelector } from 'reselect';

// input selector
const selectCart = (state) => state.cart;

// output selectors
export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  selectCartItems,
  (cartItems) => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartItemsTotal = createSelector(
  selectCartItems,
  (cartItems) =>
    cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
);
