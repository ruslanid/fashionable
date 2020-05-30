import CartActionTypes from './cart.types';

import {
  addItem,
  subtractItem,
  removeItem
} from './cart.utils';

const INITIAL_STATE = {
  items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(state.items, action.payload)
      }
    case CartActionTypes.SUBTRACT_ITEM:
      return {
        ...state,
        items: subtractItem(state.items, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItem(state.items, action.payload)
      }
    default:
      return state;
  }
};

export default cartReducer;