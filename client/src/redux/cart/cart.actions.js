import CartActionTypes from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const subtractItem = item => ({
  type: CartActionTypes.SUBTRACT_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
})