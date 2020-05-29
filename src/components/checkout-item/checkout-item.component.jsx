import React from 'react';
import {connect} from 'react-redux';

import {
  ItemContainer,
  ImageWrappingContainer,
  ImageContainer,
  DescriptionContainer,
  RemoveContainer
} from './checkout-item.styles';

import {
  removeItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, removeItem}) => {
  const {imageUrl, name, price, quantity} = item;
  return (
    <ItemContainer>
      <ImageWrappingContainer>
        <ImageContainer  src={imageUrl} alt="Cart item" />
      </ImageWrappingContainer>
      <DescriptionContainer>{name}</DescriptionContainer>
      <DescriptionContainer>{quantity}</DescriptionContainer>
      <DescriptionContainer>${price * quantity}</DescriptionContainer>
      <RemoveContainer onClick={() => removeItem(item)}>remove</RemoveContainer>
    </ItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);