import {
  SET_PESANAN,
  PESAN_FAILED,
  SET_HISTORY,
  CREATE_PESAN,
  LOG_OUT_PESAN,
} from '../../utils';

const initialState = {
  idPangkalan: '',
  idPembeli: '',
  namaPangkalan: '',
  namaPembeli: '',
  photoPembeli: '',
  photoPangkalan: '',
  tanggal: '',
  gas3Kg: '',
  gas12Kg: '',
  brightGas: '',
  total: '',
  statusPesanan: '',
  status: '',
  listPesanan: [],
  totalPesanan: null,
  listHistory: [],
};

const pesanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PESANAN:
      let totalPesanan = action.pesanan.pesan.length;
      return Object.assign({}, state, {
        listPesanan: action.pesanan.pesan,
        totalPesanan: totalPesanan,
      });
    case PESAN_FAILED:
      return Object.assign({}, state, {
        status: action.status,
      });
    case SET_HISTORY:
      return Object.assign({}, state, {
        listHistory: action.history.pesan,
      });
    case CREATE_PESAN:
      return Object.assign({}, state, {
        idPangkalan: action.pesan.pesan.idPangkalan,
        idPembeli: action.pesan.pesan.idPembeli,
        namaPangkalan: action.pesan.pesan.namaPangkalan,
        namaPembeli: action.pesan.pesan.namaPembeli,
        photoPembeli: action.pesan.pesan.photoPembeli,
        photoPangkalan: action.pesan.pesan.photoPangkalan,
        tanggal: action.pesan.pesan.tanggal,
        gas3Kg: action.pesan.pesan.gas3Kg,
        gas12Kg: action.pesan.pesan.gas12Kg,
        brightGas: action.pesan.pesan.brightGas,
        total: action.pesan.pesan.total,
        statusPesanan: action.pesan.pesan.status,
        status: action.status,
      });
    case LOG_OUT_PESAN:
      return Object.assign({}, state, {
        idPangkalan: '',
        idPembeli: '',
        namaPangkalan: '',
        namaPembeli: '',
        photoPembeli: '',
        photoPangkalan: '',
        tanggal: '',
        gas3Kg: '',
        gas12Kg: '',
        brightGas: '',
        total: '',
        statusPesanan: '',
        status: '',
        listPesanan: [],
        totalPesanan: null,
        listHistory: [],
      });
  }
  return state;
};

export default pesanReducer;
