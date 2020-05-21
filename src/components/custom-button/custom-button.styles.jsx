import styled, {css} from 'styled-components';

const regularButtonTextColor = css`
    background-color: black;
`;

const googleButtonTextColor = css`
    background-color: #df4a32;
`;

const setButtonTextColor = props => {
    if (props.googleSignIn) {
        return googleButtonTextColor;
    } else {
        return regularButtonTextColor;
    }
};

export const CustomButtonContainer = styled.button`
    width: 100%;
    line-height: 50px;
    margin-top: 25px;
    color: white;
    border: 1px solid white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 2%;

    ${setButtonTextColor}

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;