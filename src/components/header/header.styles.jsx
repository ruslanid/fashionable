import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    align-items: center;
    padding: 40px 30px;
    margin-bottom: 40px;
    box-shadow: 0px 0px 1px 1px rgba(20,23,28,0.1), 0px 3px 1px 0px rgba(20,23,28,0.1);
`;

export const LogoContainer = styled.div`
    height: 55px;
    width: 105px;
    padding: 0 20px;
`;

export const ImageContainer = styled.img`
    height: 100%;
    width: 100%;
`;

export const NavigationContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-item: center;
`;

export const LinkContainer = styled.div`
    color: #1c657a;
    font-size: 19px;
    padding: 0 20px;
    cursor: pointer;
    white-space: nowrap;

    &:last-child {
        font-weight: bold;
    }

    &:hover {
        color: #5caac1;
    }
`;