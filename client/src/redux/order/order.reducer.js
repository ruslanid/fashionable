import OrderActionTypes from './order.types';

const INITIAL_STATE = {
  lastOrder: []
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case OrderActionTypes.ADD_ORDER:
      return {
        ...state,
        lastOrder: action.payload
      }
    default:
      return state;
  }
};

export default orderReducer;