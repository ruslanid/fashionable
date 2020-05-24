import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer,
  ShopLinkContainer,
  ShopDropdownContainer
} from './header.styles';

import HomeLogo from '../../assets/images/hat.jpg';

import ShopDropdown from '../shop-dropdown/shop-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase';

import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser}) => (
  <HeaderContainer>
    <LogoContainer to="/">
        <ImageContainer alt="Home Logo" src={HomeLogo} />
    </LogoContainer>
    <NavigationContainer>
      
      <ShopLinkContainer>
        <LinkContainer to="/shop">Shop</LinkContainer>
        <ShopDropdownContainer>
            <ShopDropdown />
        </ShopDropdownContainer>
      </ShopLinkContainer>

      <LinkContainer to="/contact-us">Contact us</LinkContainer>
      {
        currentUser ?
        (<LinkContainer as="div" onClick={() => auth.signOut()}>SIGN OUT</LinkContainer>)
        :
        (<LinkContainer to="/sign-in">SIGN IN</LinkContainer>)
      }
      <CartIcon />
    </NavigationContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(Header));