import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const CartImageContainer = styled.img`
  width: 30px;
  height: 30px;
`;

export const ItemQuantityContainer = styled.div`
  position: absolute;
  right: -3px;
  top: 3px;
  font-size: 13px;
  background-color: black;
  color: white;
  padding: 4px 8px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
`;