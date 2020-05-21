import React from 'react';
import { Component } from 'react';
import Carousel from 'nuka-carousel';

import {DirectoryContainer} from './directory.styles';

import DirectorySection from '../directory-section/directory-section.component';

class Directory extends Component {
    state = {
        sections: [
            {
              id: 1,
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              linkUrl: 'shop/hats'
            },
            {
              id: 2,
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              linkUrl: 'shop/jackets'
            },
            {
              id: 3,
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              linkUrl: 'shop/sneakers'
            }
        ]
    }

    render () {
      return (
        <DirectoryContainer>
          <Carousel
            autoplay={true}
            autoplayInterval={2000}
            speed={1000}
            wrapAround={true}
            pauseOnHover={true}
          >
            {this.state.sections.map(({id, ...otherProps}) => (
              <DirectorySection key={id} {...otherProps} />
            ))}
          </Carousel>
        </DirectoryContainer>
      )
    }
};

export default Directory;