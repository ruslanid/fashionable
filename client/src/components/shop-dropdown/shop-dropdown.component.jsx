import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  ShopDropdownContainer,
  UlContainer,
  LiContainer
} from './shop-dropdown.styles';

import { selectionDirectorySections } from '../../redux/directory/directory.selectors';

const ShopDropdown = ({sections, history, match}) => (
  <ShopDropdownContainer>
    <UlContainer>
      {sections.map(({id, title, linkUrl}) => (
        <LiContainer
          key={id}
          onClick={() => history.push(`${match.url}${linkUrl}`)}>{title.toUpperCase()}</LiContainer>
      ))}
    </UlContainer>
  </ShopDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectionDirectorySections
})

export default connect(mapStateToProps)(withRouter(ShopDropdown));