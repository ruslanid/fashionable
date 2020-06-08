import styled, {css} from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100px;
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
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ImageWrappingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  padding-right: 15px;
`;

export const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const DetailsRightContainer = styled.div`
  display: flex;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;

  @media (max-width: 768px) {
    width: 28%;
  }
`;

export const ArrowContainer = styled.div`
  cursor: pointer;
  padding: 0 5px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
`;

export const RemoveContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
  padding-left: 12px;
  cursor: pointer;
  color: #5CAAC1;
`;