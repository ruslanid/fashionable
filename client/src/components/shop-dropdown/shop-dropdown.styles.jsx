import styled from 'styled-components';

export const ShopDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const UlContainer = styled.ul`
  width: 150px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 28px;
  right: -40px;
  position: absolute;
  border: 1px solid gray;
  border-radius: 2%;
  background-color: white;
  z-index: 1;
`;

export const LiContainer = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  color:  #1c657a;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
    color: #1c657a; 
  }
`;