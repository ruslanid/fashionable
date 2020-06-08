import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  width: 570px;
  height: 350px;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 270px;
    flex-direction: column;
    justify-content: center;
    height: auto;
    margin-right: 0;
  }
`;

export const ImageContainer = styled.img`
  width: 270px;
  height: 90%;
  margin-bottom: 5px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 270px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

export const NameContainer = styled.span`
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const PriceContainer = styled.span`
  text-align: center;
  
`;

export const CustomButtonContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 30px;
    border-bottom: 1px solid gray;
  }
`;