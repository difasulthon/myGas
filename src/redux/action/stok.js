/* eslint-disable radix */
import {
  POST_InputStok,
  GET_DataPangkalan,
  showError,
  FAILED,
  STOK_FAILED,
  INPUT_STOK_SUCCESS,
  SUCCESS,
} from '../../utils';

export const inputStok = (
  idPangkalan,
  namaPangkalan,
  photo,
  totalStok,
  form,
) => {
  return dispatch => {
    POST_InputStok(
      idPangkalan,
      namaPangkalan,
      photo,
      totalStok,
      parseInt(form.gas3Kg),
      parseInt(form.gas12Kg),
      parseInt(form.brightGas),
    )
      .then(res => {
        if (res.message) {
          dispatch(stokFailed(res.message));
        } else {
          dispatch(inputStokSuccess(res));
        }
      })
      .catch(err => {
        dispatch(stokFailed(err));
      });
  };
};

export const getDataPangkalan = idPangkalan => {
  return dispatch => {
    GET_DataPangkalan(idPangkalan)
      .then(res => {
        if (res.message) {
          dispatch(stokFailed(res.message));
        } else {
          return res;
        }
      })
      .catch(err => {
        dispatch(stokFailed(err));
      });
  };
};

export const stokFailed = message => {
  showError(message);
  return {
    type: STOK_FAILED,
    status: FAILED,
  };
};

export const inputStokSuccess = data => {
  return {
    type: INPUT_STOK_SUCCESS,
    stok: data,
    status: SUCCESS,
  };
};
