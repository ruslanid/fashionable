import OrderActionTypes from './order.types';

export const addOrder = order => ({
  type: OrderActionTypes.ADD_ORDER,
  payload: order
});