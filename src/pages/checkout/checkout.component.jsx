import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  CheckoutPageContainer,
  TitleContainer,
  EmptyMessageContainer,
  TotalPriceContainer
} from './checkout.styles';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({cartItems}) => (
  <CheckoutPageContainer>
    <TitleContainer>Checkout</TitleContainer>
    {
      cartItems.length > 0 ?
      cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))
      :
      <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    }
    <TotalPriceContainer>Total: $</TotalPriceContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutPage);