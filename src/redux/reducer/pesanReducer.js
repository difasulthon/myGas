import {SET_PESANAN, PESAN_FAILED} from '../../utils';

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
};

const pesanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PESANAN:
      return Object.assign({}, state, {
        idPangkalan: action.pesanan.pesan.idPangkalan,
        idPembeli: action.pesanan.pesan.idPembeli,
        namaPangkalan: action.pesanan.pesan.namaPangkalan,
        namaPembeli: action.pesanan.pesan.namaPembeli,
        photoPembeli: action.pesanan.pesan.photoPembeli,
        tanggal: action.pesanan.pesan.tanggal,
        gas3Kg: action.pesanan.pesan.gas3Kg,
        gas12Kg: action.pesanan.pesan.gas12Kg,
        brightGas: action.pesanan.pesan.brightGas,
        total: action.pesanan.pesan.totalStok,
        statusPesanan: action.pesanan.pesan.totalStok,
        status: action.status,
      });
    case PESAN_FAILED:
      return Object.assign({}, state, {
        status: action.status,
      });
  }
  return state;
};

export default pesanReducer;
