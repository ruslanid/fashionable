import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.items
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  cartItem =>
    cartItem.reduce((total, item) => total + (item.quantity * item.price), 0)
);