import {createSelector} from 'reselect';

const selectOrder = state => state.order;

export const selectLastOrder = createSelector(
  [selectOrder],
  order => order.lastOrder
);

export const selectLastOrderTotalPrice = createSelector(
  [selectLastOrder],
  lastOrder =>
    lastOrder.reduce((total, item) => total + (item.quantity * item.price), 0)
);