import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './order/order.reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'order']
};

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer,
  order: orderReducer
});

export default persistReducer(persistConfig, rootReducer);