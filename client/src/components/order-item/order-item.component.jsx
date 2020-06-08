import React from 'react';

import {
  ItemContainer,
  DetailsLeftContainer,
  ImageWrappingContainer,
  ImageContainer,
  NameContainer,
  DetailsRightContainer,
  QuantityContainer,
  PriceContainer
} from './order-item.styles';

const OrderItem = ({name, price, imageUrl, quantity}) => (
  <ItemContainer>
    <DetailsLeftContainer>
      <ImageWrappingContainer>
        <ImageContainer  src={imageUrl} alt="Cart item" />
      </ImageWrappingContainer>
      <NameContainer>{name}</NameContainer>
    </DetailsLeftContainer>
    <DetailsRightContainer>
      <QuantityContainer>{quantity} x ${price}</QuantityContainer>
      <PriceContainer>${price * quantity}</PriceContainer>
    </DetailsRightContainer>
  </ItemContainer>
);

export default OrderItem;