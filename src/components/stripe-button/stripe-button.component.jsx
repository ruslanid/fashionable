import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import HomeLogo from '../../assets/images/hat.jpg';

const StripeCheckoutButton = ({price}) => {

  const onToken = token => {
    alert("Payment Successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      image={HomeLogo}
      name="Fashionable Inc."
      description={`Your total is $${price}`}
      billingAddress
      shippingAddress
      amount={price * 100}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
    />
  )
};

export default StripeCheckoutButton;