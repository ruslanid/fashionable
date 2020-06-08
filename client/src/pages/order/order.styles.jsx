import styled from 'styled-components';

export const OrderPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 50px auto 70px;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 20px;
  }
`;

export const TitleContainer = styled.h1`
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const OrderMessageContainer = styled.div`
  font-size: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;