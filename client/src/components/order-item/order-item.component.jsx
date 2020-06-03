import React from 'react';

import {
  ItemContainer,
  ImageWrappingContainer,
  ImageContainer,
  DescriptionContainer,
} from './order-item.styles';

const OrderItem = ({name, price, imageUrl, quantity}) => (
  <ItemContainer>
    <ImageWrappingContainer>
      <ImageContainer  src={imageUrl} alt="Cart item" />
    </ImageWrappingContainer>
    <DescriptionContainer>{name}</DescriptionContainer>
    <DescriptionContainer>{quantity} x ${price}</DescriptionContainer>
    <DescriptionContainer>${price * quantity}</DescriptionContainer>
  </ItemContainer>
);

export default OrderItem;