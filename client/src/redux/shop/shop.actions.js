import ShopActionTypes from './shop.types';

import {firestore} from '../../firebase/firebase';

const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

const fetchCollectionsSuccess = collections => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());

    firestore.collection("/collections").get()
    .then(querySnapshot => {
      if (querySnapshot.empty) throw "No data";

      const collectionsMap = querySnapshot.docs.reduce((accumulator, doc) => {
        const {title, items} = doc.data();
        const collection = {
          id: doc.id,
          routeName: encodeURI(title.toLowerCase()),
          title,
          items
        }
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {});

      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
};