import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  AvatarDropdownContainer,
  UserNameContainer,
  DisplayNameContainer,
  SignOutContainer
} from './avatar-dropdown.styles';

import {auth} from '../../firebase/firebase';

import {selectCurrentUser} from '../../redux/user/user.selectors';

const AvatartDropdown = ({currentUser: {displayName}}) => (
  <AvatarDropdownContainer>
    <UserNameContainer>
      <span>Signed in as</span>
      <DisplayNameContainer>{displayName}</DisplayNameContainer>
    </UserNameContainer>
    <SignOutContainer>
      <div onClick={() => auth.signOut()}>SIGN OUT</div>
    </SignOutContainer>
  </AvatarDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AvatartDropdown);