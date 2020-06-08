import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SignUnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 2%;
  border: 1px solid gray;
  padding: 20px 35px;
  margin: 60px auto;

  @media (max-width: 768px) {
		width: 90%;
	}
`;

export const TitleContainer = styled.h2`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const FooterContainer = styled.p`
  margin-top: 30px;
  text-align: center;
`;

export const LinkContainer = styled(Link)`
  color: #1c657a;
  font-weight: bold;
`;