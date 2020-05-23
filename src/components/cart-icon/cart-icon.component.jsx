import React from 'react';
import { withRouter } from 'react-router-dom';

import CartLogo from '../../assets/images/cart-icon.jpg';

import {
  CartIconContainer,
  CartImageContainer
} from './cart-icon.styles';

const CartIcon = ({history}) => (
  <CartIconContainer onClick={() => history.push("/checkout")}>
    <CartImageContainer alt="Cart logo" src={CartLogo} />
  </CartIconContainer>
);

export default withRouter(CartIcon);