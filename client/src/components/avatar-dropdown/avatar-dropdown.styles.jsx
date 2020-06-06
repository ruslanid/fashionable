import styled from 'styled-components';

export const AvatarDropdownContainer = styled.div`
  display: inline-block;
  width: 150px;
  border: 1px solid black;
  border-radius: 2%;
  text-align: center;
  top: 70px;
  right: 45px;
  position: absolute;
  background-color: white;
  z-index: 1;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid gray;
`;

export const DisplayNameContainer = styled.span`
  margin-top: 5px;
  font-weight: bold;
`;

export const SignOutContainer = styled.div`
  padding: 10px;
  color: #1c657a;

  &:hover {
		color: #5caac1;
	}
`;