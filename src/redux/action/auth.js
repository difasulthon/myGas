import {
  POST_SignUp,
  POST_Login,
  SET_USER,
  SUCCESS,
  FAILED,
  AUTH_FAILED,
  showError,
} from '../../utils';

export const signUpAction = (form, photo) => {
  return dispatch => {
    POST_SignUp(form.fullName, form.role, form.email, form.password, photo)
      .then(res => {
        if (res.message) {
          dispatch(authFailed(res.message));
        } else {
          dispatch(authSuccess(res));
        }
      })
      .catch(err => {
        dispatch(authFailed(err));
      });
  };
};

export const loginAction = form => {
  return dispatch => {
    POST_Login(form.email, form.password)
      .then(res => {
        if (res.message) {
          dispatch(authFailed(res.message));
        } else {
          dispatch(authSuccess(res));
        }
      })
      .catch(err => {
        dispatch(authFailed(err));
      });
  };
};

export const authSuccess = data => {
  return {
    type: SET_USER,
    user: data,
    status: SUCCESS,
  };
};

export const authFailed = message => {
  showError(message);
  return {
    type: AUTH_FAILED,
    status: FAILED,
  };
};
