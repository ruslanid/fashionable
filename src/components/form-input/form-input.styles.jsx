import styled from 'styled-components';

export const FormInputContainer = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    background-color: white;
    font-size: 15px;
    padding: 10px;
    margin: 20px 0;

    &:focus {
        outline: none;
    }
`;