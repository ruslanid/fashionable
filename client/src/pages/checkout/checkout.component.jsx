import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  CheckoutPageContainer,
  TitleContainer,
  EmptyMessageContainer,
  TotalPriceContainer
} from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaySection from '../../components/pay-section/pay-section.component';

import {
  selectCartItems,
  selectCartItemsTotalPrice
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({cartItems, totalPrice}) => (
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
    <TotalPriceContainer>Total: ${totalPrice}</TotalPriceContainer>
    {
       cartItems.length > 0 ?
        <PaySection />
        :
        null
    }
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);