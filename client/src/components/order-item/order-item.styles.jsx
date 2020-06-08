import styled, {css} from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 150px;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;

  @media (max-width: 768px) {
   flex-direction: column;
  }
`;

export const DetailsLeftContainer = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const DescriptionStyles = css`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const ImageWrappingContainer = styled.div`
  ${DescriptionStyles}
  padding-right: 15px;
`;

export const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
`;

export const NameContainer = styled.div`
  ${DescriptionStyles}
  align-items: center;
`;

export const DetailsRightContainer = styled.div`
  display: flex;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  ${DescriptionStyles}
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`;