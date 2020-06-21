import {
  GET_DataPesanan,
  showError,
  PESAN_FAILED,
  FAILED,
  SET_PESANAN,
  SUCCESS,
  GET_HistoryPangkalan,
  SET_HISTORY,
  POST_CreatePesan,
  CREATE_PESAN,
  GET_HistoryPembeli,
  POST_UpdateStatusPesan,
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

export const getHistoryPembeli = idPembeli => {
  return dispatch => {
    GET_HistoryPembeli(idPembeli)
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

export const addPesanAction = (
  idPangkalan,
  idPembeli,
  namaPangkalan,
  namaPembeli,
  photoPembeli,
  photoPangkalan,
  gas3Kg,
  gas12Kg,
  brightGas,
  total,
) => {
  return dispatch => {
    POST_CreatePesan(
      idPangkalan,
      idPembeli,
      namaPangkalan,
      namaPembeli,
      photoPembeli,
      photoPangkalan,
      gas3Kg,
      gas12Kg,
      brightGas,
      total,
    )
      .then(res => {
        if (res.message) {
          dispatch(pesanFailed(res.message));
        } else {
          dispatch(createPesanSuccess(res));
        }
      })
      .catch(err => {
        dispatch(pesanFailed(err));
      });
  };
};

export const updatePesan = (idPangkalan, idPembeli, status) => {
  POST_UpdateStatusPesan(idPangkalan, idPembeli, status);
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

export const createPesanSuccess = data => {
  return {
    type: CREATE_PESAN,
    pesan: data,
    status: SUCCESS,
  };
};
