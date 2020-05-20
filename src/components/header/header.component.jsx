import React from 'react';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer
} from './header.styles';

import Logo from '../../assets/images/hat.jpg';

const Header = () => (
  <HeaderContainer>
    <LogoContainer>
        <ImageContainer alt="Home Logo" src={Logo} />
    </LogoContainer>
    <NavigationContainer>
      <LinkContainer>Shop</LinkContainer>
      <LinkContainer>Contact us</LinkContainer>
      <LinkContainer>SIGN IN</LinkContainer>
    </NavigationContainer>
  </HeaderContainer>
);

export default Header;