import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.components';

const ShopPage = ({match}) => (
  <div>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;