import styled from 'styled-components';

export const DirectorySectionContainer = styled.div`
    border: 1px solid black;
    border-radius: 1%;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
`;

export const ContentContainer = styled.div`
    position: absolute;
    border-radius: 2%;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
    background-color: white;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
`;

export const TitleContainer = styled.div`
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #4a4a4a;
`;

export const SubtitleContainer = styled.div`
    font-size: 20px;
`;
