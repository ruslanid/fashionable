import styled from 'styled-components';

export const AvatarDropdownContainer = styled.div`
  display: none;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
	height: 100%;
	width: 80px;
	padding 0 20px;
  cursor: pointer;
  
  &:hover ${AvatarDropdownContainer} {
		display: inline-block;
	}
`;

export const ImageContainer = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 45%;
`;