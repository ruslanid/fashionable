import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CartLogo from '../../assets/images/cart-icon.jpg';

import {
  CartIconContainer,
  CartImageContainer,
  ItemQuantityContainer
} from './cart-icon.styles';

import {selectCartItemsQuantity} from '../../redux/cart/cart.selectors';

const CartIcon = ({history, itemQuantity}) => (
  <CartIconContainer onClick={() => history.push("/checkout")}>
    <CartImageContainer alt="Cart logo" src={CartLogo} />
    <ItemQuantityContainer>{itemQuantity}</ItemQuantityContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemQuantity: selectCartItemsQuantity
});

export default connect(mapStateToProps)(withRouter(CartIcon));