import {
  INPUT_STOK_SUCCESS,
  STOK_FAILED,
  SET_LIST_STOK,
  LOG_OUT_STOK,
} from '../../utils';

const initialState = {
  idPangkalan: '',
  namaPangkalan: '',
  photo: '',
  totalStok: '',
  gas3Kg: '',
  gas12Kg: '',
  brightGas: '',
  listStok: '',
  status: '',
};

const stokReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_STOK_SUCCESS:
      return Object.assign({}, state, {
        idPangkalan: action.stok.stok.idPangkalan,
        namaPangkalan: action.stok.stok.namaPangkalan,
        photo: action.stok.stok.photo,
        totalStok: action.stok.stok.totalStok,
        gas3Kg: action.stok.stok.gas3Kg,
        gas12Kg: action.stok.stok.gas12Kg,
        brightGas: action.stok.stok.brightGas,
        status: action.status,
      });
    case STOK_FAILED:
      return Object.assign({}, state, {
        status: action.status,
      });
    case SET_LIST_STOK:
      return Object.assign({}, state, {
        listStok: action.stok.stok,
        status: action.status,
      });
    case LOG_OUT_STOK:
      return Object.assign({}, state, {
        idPangkalan: '',
        namaPangkalan: '',
        photo: '',
        totalStok: '',
        gas3Kg: '',
        gas12Kg: '',
        brightGas: '',
        listStok: '',
        status: '',
      });
  }
  return state;
};

export default stokReducer;
