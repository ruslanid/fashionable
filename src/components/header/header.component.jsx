import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer
} from './header.styles';

import Logo from '../../assets/images/hat.jpg';

import { auth } from '../../firebase/firebase';

class Header extends Component  {

  render() {
    return (
      <HeaderContainer>
        <LogoContainer to="/">
            <ImageContainer alt="Home Logo" src={Logo} />
        </LogoContainer>
        <NavigationContainer>
          <LinkContainer to="/shop">Shop</LinkContainer>
          <LinkContainer to="/contact-us">Contact us</LinkContainer>
          {
            this.props.currentUser ?
            (<LinkContainer as="div" onClick={() => auth.signOut()}>SIGN OUT</LinkContainer>)
            :
            (<LinkContainer to="/sign-in">SIGN IN</LinkContainer>)
          }
        </NavigationContainer>
      </HeaderContainer>
    )
  }
};

export default withRouter(Header);