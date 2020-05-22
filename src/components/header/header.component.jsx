import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer
} from './header.styles';

import Logo from '../../assets/images/hat.jpg';

import { auth } from '../../firebase/firebase';

import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({currentUser}) => (
  <HeaderContainer>
    <LogoContainer to="/">
        <ImageContainer alt="Home Logo" src={Logo} />
    </LogoContainer>
    <NavigationContainer>
      <LinkContainer to="/shop">Shop</LinkContainer>
      <LinkContainer to="/contact-us">Contact us</LinkContainer>
      {
        currentUser ?
        (<LinkContainer as="div" onClick={() => auth.signOut()}>SIGN OUT</LinkContainer>)
        :
        (<LinkContainer to="/sign-in">SIGN IN</LinkContainer>)
      }
    </NavigationContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(Header));