import React from 'react';
import {connect} from 'react-redux';

import {
  ItemContainer,
  ImageContainer,
  DetailsContainer,
  DescriptionContainer,
  NameContainer,
  PriceContainer,
  CustomButtonContainer
} from './collection-item.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

import {addItem} from '../../redux/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
  const {imageUrl, name, price} = item;

  return (
    <ItemContainer>
      <ImageContainer src={imageUrl} alt="Collection item" />
      <DetailsContainer>
        <DescriptionContainer>
          <NameContainer>{name}</NameContainer>
          <PriceContainer>${price}</PriceContainer>
        </DescriptionContainer>
        <CustomButtonContainer>
          <CustomButton onClick={() => addItem(item)}>Add to cart</CustomButton>
        </CustomButtonContainer>
      </DetailsContainer>
    </ItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);