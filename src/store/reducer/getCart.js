import * as types from '../action/getCart';
const initialState = {
  respGetCartOk: null,
  respGetCartFail: null,
};
const getCart = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CART_OK:
       console.log('Reducer OK: ', action.data);
      return {
        ...state,
        respGetCartOk: action.data,
      };
    case types.GET_CART_FAIL:
       console.log('Reducer FAIL: ', action.data);
      return {
        ...state,
        respGetCartFail: action.data,
      };
    default:
      return state;
  }
};
export default getCart;
