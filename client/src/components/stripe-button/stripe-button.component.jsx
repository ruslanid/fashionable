import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import HomeLogo from '../../assets/images/hat.jpg';

const StripeCheckoutButton = ({price}) => {

  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    axios({
      url: 'payment',
      method: 'post',
      data: { 
        amount: priceForStripe,
        token: token
      }
    }).then(res => {
      alert("Payment successful");
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
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  )
};

export default StripeCheckoutButton;