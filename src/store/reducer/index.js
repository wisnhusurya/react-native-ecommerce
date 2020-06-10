import {combineReducers} from 'redux';
import dummy from './dummy';
import getCart from './getCart';

const rootReducer = combineReducers({
  dummy,
  getCart,
});
export default rootReducer;
