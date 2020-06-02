import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  CheckoutPageContainer,
  TitleContainer,
  EmptyMessageContainer,
  TotalPriceContainer,
  PaymentInfoContainer,
  PaymentButtonContainer
} from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartItemsTotalPrice
} from '../../redux/cart/cart.selectors';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
    <PaymentInfoContainer>
      *Test credit card
      <br/><br/>
      4242 4242 4242 4242 - Exp: 09/20 - CW: 123
      <br/>
    </PaymentInfoContainer>
    <PaymentButtonContainer>
      <StripeCheckoutButton price={totalPrice} />
    </PaymentButtonContainer>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);