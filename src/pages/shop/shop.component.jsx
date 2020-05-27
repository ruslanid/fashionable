import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.components';

import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';
import {
  selectAreCollectionsFetching, selectIsCollectionLoaded
} from '../../redux/shop/shop.selectors';

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const {match, areCollectionsFetching, isCollectionLoaded} = this.props;

    return (
      <div className="shop-page">
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => isCollectionLoaded ? (<CollectionPage {...props} />) : (<h2>Loading...</h2>)}
          />
          <Route path={`${match.path}`} component={CollectionsOverview} />
        </Switch>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

const mapStateToProps = createStructuredSelector({
  areCollectionsFetching: selectAreCollectionsFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);