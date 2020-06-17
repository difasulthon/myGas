import {
  GET_DataPesanan,
  showError,
  PESAN_FAILED,
  FAILED,
  SET_PESANAN,
  SUCCESS,
  GET_HistoryPangkalan,
  SET_HISTORY,
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

export const getHistoryPangkalan = idPangkalan => {
  console.log('on action');
  return dispatch => {
    GET_HistoryPangkalan(idPangkalan)
      .then(res => {
        if (res.message) {
          dispatch(pesanFailed(res.message));
        } else {
          dispatch(getHistorySuccess(res));
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

export const getHistorySuccess = data => {
  return {
    type: SET_HISTORY,
    history: data,
    status: SUCCESS,
  };
};
