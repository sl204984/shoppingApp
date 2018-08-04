import {
  combineReducers
} from 'redux';
import loginReducer from './login';
import homePageReducer from './home-page';
import searchResReducer from './search-result';
import shoppingMallReducer from './shopping-mall';

const rootReducer = combineReducers({
  loginReducer,
  homePageReducer,
  searchResReducer,
  shoppingMallReducer
});

export default rootReducer;