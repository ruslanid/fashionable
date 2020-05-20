import React from 'react';

import {
    DirectorySectionContainer,
    BackgroundImageContainer,
    ContentContainer,
    TitleContainer,
    SubtitleContainer
} from './directory-section.styles';

const DirectorySection = ({title, linkUrl, imageUrl}) => (
    <DirectorySectionContainer>
        <BackgroundImageContainer style={{ backgroundImage: `url(${imageUrl})`}} />
        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </DirectorySectionContainer>
);

export default DirectorySection;