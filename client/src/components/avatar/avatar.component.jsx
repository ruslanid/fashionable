import React from 'react';

import UserLogo from '../../assets/images/profile-image.png';

import {
  AvatarContainer,
  ImageContainer,
  AvatarDropdownContainer
} from './avatar.styles';

import AvatarDropdown from '../../components/avatar-dropdown/avatar-dropdown.component';

const Avatar = () => (
  <AvatarContainer>
    <ImageContainer alt="Cart logo" src={UserLogo} />
    <AvatarDropdownContainer>
      <AvatarDropdown />
    </AvatarDropdownContainer>
  </AvatarContainer>
);

export default Avatar;