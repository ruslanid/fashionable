import React from 'react';
import {connect} from 'react-redux';

import {
  ItemContainer,
  ImageWrappingContainer,
  ImageContainer,
  DescriptionContainer,
  ArrowContainer,
  RemoveContainer
} from './checkout-item.styles';

import {
  addItem,
  subtractItem,
  removeItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, addItem, subtractItem, removeItem}) => {
  const {imageUrl, name, price, quantity} = item;
  return (
    <ItemContainer>
      <ImageWrappingContainer>
        <ImageContainer  src={imageUrl} alt="Cart item" />
      </ImageWrappingContainer>
      <DescriptionContainer>{name}</DescriptionContainer>
      <DescriptionContainer>
        <ArrowContainer onClick={() => subtractItem(item)}>&#10094;</ArrowContainer>
        <span>{quantity}</span>
        <ArrowContainer onClick={() => addItem(item)}>&#10095;</ArrowContainer>
      </DescriptionContainer>
      <DescriptionContainer>${price * quantity}</DescriptionContainer>
      <RemoveContainer onClick={() => removeItem(item)}>remove</RemoveContainer>
    </ItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  subtractItem: item => dispatch(subtractItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);