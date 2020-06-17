import {SET_USER, AUTH_FAILED, LOG_OUT} from '../../utils';

const initialState = {
  userId: '',
  fullName: '',
  role: '',
  email: '',
  photo: '',
  token: '',
  status: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      console.log('nama: ', action.user.fullName);
      return Object.assign({}, state, {
        userId: action.user.userId,
        fullName: action.user.fullName,
        role: action.user.role,
        email: action.user.email,
        photo: action.user.photo,
        token: action.user.token,
        status: action.status,
      });
    case AUTH_FAILED:
      return Object.assign({}, state, {
        status: action.status,
      });
    case LOG_OUT:
      return Object.assign({}, state, {
        userId: '',
        fullName: '',
        role: '',
        email: '',
        photo: '',
        token: '',
        status: '',
      });
  }
  return state;
};

export default authReducer;
