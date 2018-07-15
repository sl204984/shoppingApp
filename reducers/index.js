import {
  combineReducers
} from 'redux';
import homePageReducer from './home-page';

const rootReducer = combineReducers({
  homePageReducer,
});

export default rootReducer;