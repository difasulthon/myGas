import {SET_LOADING} from '../../utils';

export const setLoading = status => {
  return {
    type: SET_LOADING,
    status: status,
  };
};
