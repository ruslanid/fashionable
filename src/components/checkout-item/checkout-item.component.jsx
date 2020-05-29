import React from 'react';

import {
  ItemContainer,
  ImageWrappingContainer,
  ImageContainer,
  DescriptionContainer,
  RemoveContainer
} from './checkout-item.styles';

const CheckoutItem = ({item}) => {
  const {imageUrl, name, price, quantity} = item;
  return (
    <ItemContainer>
      <ImageWrappingContainer>
        <ImageContainer  src={imageUrl} alt="Cart item" />
      </ImageWrappingContainer>
      <DescriptionContainer>{name}</DescriptionContainer>
      <DescriptionContainer>{quantity}</DescriptionContainer>
      <DescriptionContainer>${price * quantity}</DescriptionContainer>
      <RemoveContainer>remove</RemoveContainer>
    </ItemContainer>
  )
};

export default CheckoutItem;