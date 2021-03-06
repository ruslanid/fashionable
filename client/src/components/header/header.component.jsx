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
import Avatar from '../avatar/avatar.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser}) => (
  <HeaderContainer>
    <LogoContainer to="/">
        <ImageContainer alt="Home Logo" src={HomeLogo} />
    </LogoContainer>
    <NavigationContainer>
      
      <ShopLinkContainer>
        <LinkContainer as="div">Shop</LinkContainer>
        <ShopDropdownContainer>
            <ShopDropdown />
        </ShopDropdownContainer>
      </ShopLinkContainer>

      {
        currentUser ?
        (<Avatar />)
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