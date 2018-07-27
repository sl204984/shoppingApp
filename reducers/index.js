import {
  combineReducers
} from 'redux';
import loginReducer from './login';
import homePageReducer from './home-page';
import searchResReducer from './search-result';

const rootReducer = combineReducers({
  loginReducer,
  homePageReducer,
  searchResReducer,
});

export default rootReducer;