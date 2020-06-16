import {
  GET_DataPesanan,
  showError,
  PESAN_FAILED,
  FAILED,
  SET_PESANAN,
  SUCCESS,
} from '../../utils';

export const getDataPesananAction = idPangkalan => {
  return dispatch => {
    GET_DataPesanan(idPangkalan)
      .then(res => {
        if (res.message) {
          dispatch(pesanFailed(res.message));
        } else {
          dispatch(pesanSuccess(res));
        }
      })
      .catch(err => {
        dispatch(pesanFailed(err));
      });
  };
};

export const pesanSuccess = data => {
  return {
    type: SET_PESANAN,
    pesanan: data,
    status: SUCCESS,
  };
};

export const pesanFailed = message => {
  showError(message);
  return {
    type: PESAN_FAILED,
    status: FAILED,
  };
};
