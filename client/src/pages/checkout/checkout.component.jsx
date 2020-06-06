import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CheckoutPageContainer,
  TitleContainer,
  EmptyMessageContainer,
  TotalPriceContainer,
  SignInMessageContainer
} from './checkout.styles';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaySection from '../../components/pay-section/pay-section.component';

import {
  selectCartItems,
  selectCartItemsTotalPrice
} from '../../redux/cart/cart.selectors';

import {
  selectCurrentUser
} from '../../redux/user/user.selectors';

const CheckoutPage = ({ cartItems, totalPrice, currentUser }) => {

  const renderPaySection = () => {
    if (cartItems.length > 0 && currentUser) {
      return <PaySection />
    } else if (cartItems.length > 0) {
      return (<SignInMessageContainer>Please sign in to complete the order.</SignInMessageContainer>)
    } else {
      return null;
    }
  };

  return (
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
        renderPaySection()
      }
    </CheckoutPageContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CheckoutPage);