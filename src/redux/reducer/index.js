import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import authReducer from './authReducer';
import stokReducer from './stokReducer';
import pesanReducer from './pesanReducer';

const reducer = combineReducers({
  loadingReducer,
  authReducer,
  stokReducer,
  pesanReducer,
});

export default reducer;
