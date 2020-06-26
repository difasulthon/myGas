import {
  POST_SignUp,
  POST_Login,
  SET_USER,
  SUCCESS,
  FAILED,
  AUTH_FAILED,
  showError,
  POST_UpdateProfile,
  LOG_OUT,
  SET_LOADING,
  LOG_OUT_PESAN,
  LOG_OUT_STOK,
} from '../../utils';

export const signUpAction = (form, photo) => {
  return dispatch => {
    dispatch(loadingTrue());
    POST_SignUp(form.fullName, form.role, form.email, form.password, photo)
      .then(res => {
        if (res.message) {
          dispatch(loadingFalse());
          dispatch(authFailed(res.message));
        } else {
          dispatch(authSuccess(res));
          dispatch(loadingFalse());
        }
      })
      .catch(err => {
        dispatch(loadingFalse());
        dispatch(authFailed(err));
      });
  };
};

export const loginAction = form => {
  return dispatch => {
    dispatch(loadingTrue());
    POST_Login(form.email, form.password)
      .then(res => {
        if (res.message) {
          dispatch(loadingFalse());
          dispatch(authFailed(res.message));
        } else {
          dispatch(authSuccess(res));
          dispatch(loadingFalse());
        }
      })
      .catch(err => {
        dispatch(loadingFalse());
        dispatch(authFailed(err));
      });
  };
};

export const updateProfileAction = (form, photo) => {
  return dispatch => {
    POST_UpdateProfile(form.userId, form.fullName, form.password, photo)
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

export const logOutAction = () => {
  return dispatch => {
    dispatch(logOutAuth());
    dispatch(logOutPesan());
    dispatch(logOutStok());
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

export const loadingTrue = () => {
  return {
    type: SET_LOADING,
    status: true,
  };
};

export const loadingFalse = () => {
  return {
    type: SET_LOADING,
    status: false,
  };
};

export const logOutAuth = () => {
  return {
    type: LOG_OUT,
  };
};

export const logOutPesan = () => {
  return {
    type: LOG_OUT_PESAN,
  };
};

export const logOutStok = () => {
  return {
    type: LOG_OUT_STOK,
  };
};
