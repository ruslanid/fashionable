import React from 'react';

import {
  ItemContainer,
  ImageContainer,
  DetailsContainer,
  NameContainer,
  PriceContainer,
  CustomButtonContainer
} from './collection-item.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

const CollectionItem = ({imageUrl, name, price}) => (
  <ItemContainer>
    <ImageContainer src={imageUrl} alt="Collection item" />
    <DetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>${price}</PriceContainer>
      <CustomButtonContainer>
        <CustomButton>Add to cart</CustomButton>
      </CustomButtonContainer>
    </DetailsContainer>
  </ItemContainer>
);

export default CollectionItem;