import {SET_LOADING} from '../../utils';

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.status,
      };
  }
  return state;
};

export default loadingReducer;
