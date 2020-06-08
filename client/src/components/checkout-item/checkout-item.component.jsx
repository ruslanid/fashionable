import React from 'react';
import {connect} from 'react-redux';

import {
  ItemContainer,
  DetailsLeftContainer,
  ImageWrappingContainer,
  ImageContainer,
  NameContainer,
  DetailsRightContainer,
  QuantityContainer,
  ArrowContainer,
  PriceContainer,
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

      <DetailsLeftContainer>
        <ImageWrappingContainer>
          <ImageContainer  src={imageUrl} alt="Cart item" />
        </ImageWrappingContainer>
        <NameContainer>
          <p>{name}</p>
          <p>${price}</p>
        </NameContainer>
      </DetailsLeftContainer>

      <DetailsRightContainer>
        <QuantityContainer>
          <ArrowContainer onClick={() => subtractItem(item)}>&#10094;</ArrowContainer>
          <span>{quantity}</span>
          <ArrowContainer onClick={() => addItem(item)}>&#10095;</ArrowContainer>
        </QuantityContainer>
        <PriceContainer>${price * quantity}</PriceContainer>
        <RemoveContainer onClick={() => removeItem(item)}>remove</RemoveContainer>
      </DetailsRightContainer>

    </ItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  subtractItem: item => dispatch(subtractItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);