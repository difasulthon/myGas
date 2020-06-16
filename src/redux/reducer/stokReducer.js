import {INPUT_STOK_SUCCESS, STOK_FAILED} from '../../utils';

const initialState = {
  idPangkalan: '',
  namaPangkalan: '',
  photo: '',
  totalStok: '',
  gas3Kg: '',
  gas12Kg: '',
  brightGas: '',
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
  }
  return state;
};

export default stokReducer;
