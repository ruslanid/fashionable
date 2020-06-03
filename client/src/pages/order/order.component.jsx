import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  OrderPageContainer,
  TitleContainer,
  OrderMessageContainer
} from './order.styles';

import OrderItem from '../../components/order-item/order-item.component';

import {
  selectLastOrder,
  selectLastOrderTotalPrice
} from '../../redux/order/order.selectors';

const OrderPage = ({order, totalPrice}) => (
  <OrderPageContainer>
    <TitleContainer>Order confirmation</TitleContainer>
    <OrderMessageContainer>
      <p>Thank you for shopping with us! We are processing your order now.</p>
      <p>Order total: ${totalPrice}</p>
      <p>Order details:</p>
    </OrderMessageContainer>

    {order.map(({id, ...otherProps}) => (
      <OrderItem key={id} {...otherProps} />
    ))}
  </OrderPageContainer>
);

const mapStateToProps = createStructuredSelector({
  order: selectLastOrder,
  totalPrice: selectLastOrderTotalPrice
});

export default connect(mapStateToProps)(OrderPage);