import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPage from '../collection/collection.components';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithLoading from '../../components/with-loading/with-loading.component';

import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';

import {
  selectAreCollectionsFetching, selectIsCollectionLoaded
} from '../../redux/shop/shop.selectors';


const CollectionPageWithLoading = WithLoading(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const {match, areCollectionsFetching, isCollectionLoaded} = this.props;
    console.log(isCollectionLoaded);
    return (
      <div className="shop-page">
        <Switch>
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => <CollectionPageWithLoading isLoading={!isCollectionLoaded} {...props} />}
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