import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 70px;
	align-items: center;
	padding: 35px 40px;
	margin-bottom: 40px;
	box-shadow: 0px 0px 1px 1px rgba(20,23,28,0.1), 0px 3px 1px 0px rgba(20,23,28,0.1);

	@media (max-width: 768px) {
		padding: 20px 20px;
	}
`;

export const LogoContainer = styled(Link)`
	height: 55px;
	width: 70px;
`;

export const ImageContainer = styled.img`
	height: 100%;
	width: 100%;
`;

export const NavigationContainer = styled.div`
	width: 60%;
	height: 70px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const LinkContainer = styled(Link)`
	color: #1c657a;
	font-size: 19px;
	padding: 0 20px;
	cursor: pointer;
	white-space: nowrap;

	@media (max-width: 768px) {
		padding: 0 10px;
	}

	&:last-child {
		font-weight: bold;
	}

	&:hover {
		color: #5caac1;
	}
`;

export const ShopDropdownContainer = styled.div`
	display: none;
`;

export const ShopLinkContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	&:hover ${ShopDropdownContainer} {
		display: inline-block;
	}
`;