import React from 'react';

import {
  PaymentInfoContainer,
  PaymentButtonContainer
} from './pay-section..styles';

import StripeCheckoutButton from '../stripe-button/stripe-button.component';

const PaySection = () => (
  <div>
    <PaymentInfoContainer>
      <p>*Test credit card</p>
      <p>4242 4242 4242 4242 - Exp: 09/20 - CW: 123</p>
    </PaymentInfoContainer>
    <PaymentButtonContainer>
      <StripeCheckoutButton />
    </PaymentButtonContainer>
  </div>
);

export default PaySection;