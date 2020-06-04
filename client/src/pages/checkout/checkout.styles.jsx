import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 50px auto 50px;
`;

export const TitleContainer = styled.h1`
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
`;

export const EmptyMessageContainer = styled.p`
  display: flex;
  // justify-content: center;
`;

export const TotalPriceContainer = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  font-size: 25px;
`;

export const SignInMessageContainer = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
`;