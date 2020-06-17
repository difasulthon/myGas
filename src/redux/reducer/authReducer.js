import {SET_USER, AUTH_FAILED} from '../../utils';

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
  }
  return state;
};

export default authReducer;
