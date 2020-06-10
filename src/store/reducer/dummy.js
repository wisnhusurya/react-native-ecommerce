import * as types from '../action/dummy';
const initialState = {
  respDummyOk: null,
  respDummyFail: null,
};
const dummy = (state = initialState, action) => {
  switch (action.type) {
    case types.DUMMY_OK:
      //  console.log('Reducer OK: ', action.data);
      return {
        ...state,
        respDummyOk: action.data,
      };
    case types.DUMMY_FAIL:
      //  console.log('Reducer FAIL: ', action.data);
      return {
        ...state,
        respDummyFail: action.data,
      };
    default:
      return state;
  }
};
export default dummy;
