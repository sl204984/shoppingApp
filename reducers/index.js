import {
  combineReducers
} from 'redux';
import homePageReducer from './home-page';
import searchResReducer from './search-result';

const rootReducer = combineReducers({
  homePageReducer,
  searchResReducer,
});

export default rootReducer;