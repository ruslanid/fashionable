import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer
} from './header.styles';

import Logo from '../../assets/images/hat.jpg';

const Header = ({history}) => (
  <HeaderContainer>
    <LogoContainer to="/">
        <ImageContainer alt="Home Logo" src={Logo} />
    </LogoContainer>
    <NavigationContainer>
      <LinkContainer to="/shop">Shop</LinkContainer>
      <LinkContainer to="/contact-us">Contact us</LinkContainer>
      <LinkContainer to="/authentication">SIGN IN</LinkContainer>
    </NavigationContainer>
  </HeaderContainer>
);

export default withRouter(Header);