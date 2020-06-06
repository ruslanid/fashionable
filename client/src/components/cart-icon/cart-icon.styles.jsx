import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding-left: 10px;
`;

export const CartImageContainer = styled.img`
  width: 35px;
  height: 35px;
`;

export const ItemQuantityContainer = styled.div`
  position: absolute;
  right: -8px;
  top: 3px;
  font-size: 13px;
  background-color: #3148b6;
  color: white;
  padding: 4px 8px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
`;