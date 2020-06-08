import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
`;

export const TitleContainer = styled.h1`
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;