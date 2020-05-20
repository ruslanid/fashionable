import React from 'react';
import {withRouter} from 'react-router-dom';

import {
    DirectorySectionContainer,
    BackgroundImageContainer,
    ContentContainer,
    TitleContainer,
    SubtitleContainer
} from './directory-section.styles';

const DirectorySection = ({title, linkUrl, imageUrl, history, match}) => (
    <DirectorySectionContainer
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer style={{ backgroundImage: `url(${imageUrl})`}} />
        <ContentContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleContainer>SHOP NOW</SubtitleContainer>
        </ContentContainer>
    </DirectorySectionContainer>
);

export default withRouter(DirectorySection);