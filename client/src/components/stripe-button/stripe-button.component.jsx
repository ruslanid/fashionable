import React from 'react';
import {withRouter} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import HomeLogo from '../../assets/images/hat.jpg';

import {
  selectCartItems,
  selectCartItemsTotalPrice
} from '../../redux/cart/cart.selectors';

import {clearCart} from '../../redux/cart/cart.actions';
import {addOrder} from '../../redux/order/order.actions';

const StripeCheckoutButton = ({totalPrice, cartItems, dispatch, history}) => {

  const priceForStripe = totalPrice * 100;

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: { 
        amount: priceForStripe,
        token: token
      }
    }).then(res => {
      dispatch(addOrder(cartItems));
      dispatch(clearCart());
      history.push("/order");
    }).catch(error => {
      console.log("Payment error: ", console.log(error));
      alert("Error with a payment. Check that you are using the correct credit card");
    })
  };

  return (
    <StripeCheckout
      label="Pay Now"
      image={HomeLogo}
      name="Fashionable Inc."
      description={`Your total is $${totalPrice}`}
      billingAddress
      shippingAddress
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotalPrice
});

export default connect(mapStateToProps)(withRouter(StripeCheckoutButton));