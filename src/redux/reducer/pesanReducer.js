import {SET_PESANAN, PESAN_FAILED, SET_HISTORY} from '../../utils';

const initialState = {
  idPangkalan: '',
  idPembeli: '',
  namaPangkalan: '',
  namaPembeli: '',
  photoPembeli: '',
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
      console.log('data history: ', action.history.pesan);
      return Object.assign({}, state, {
        listHistory: action.history.pesan,
      });
  }
  return state;
};

export default pesanReducer;
