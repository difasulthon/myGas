import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducer';

const configStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
};

export default configStore;
