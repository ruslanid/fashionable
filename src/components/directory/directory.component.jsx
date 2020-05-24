import React from 'react';
import Carousel from 'nuka-carousel';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {DirectoryContainer} from './directory.styles';

import DirectorySection from '../directory-section/directory-section.component';
import { selectionDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => (
  <DirectoryContainer>
    <Carousel
      autoplay={true}
      autoplayInterval={2000}
      speed={1000}
      wrapAround={true}
      pauseOnHover={true}
    >
      {sections.map(({id, ...otherProps}) => (
        <DirectorySection key={id} {...otherProps} />
      ))}
    </Carousel>
  </DirectoryContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectionDirectorySections
})

export default connect(mapStateToProps)(Directory);