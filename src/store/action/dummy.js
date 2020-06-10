import {dummy} from '../../api';
export const DUMMY_OK = 'DUMMY_OK';
export const DUMMY_FAIL = 'DUMMY_FAIL';
export const requestDummy = () => dispatch => {
  dummy().then(({data}) => {
      dispatch(respRegOk(data));
      // console.log('dummyData ', data);
    })
    .catch(e => {
      dispatch(respRegFail(e));
      //console.log('dummyData ', e);
    });
};
const respRegOk = data => {
  return {
    type: DUMMY_OK,
    data,
  };
};
const respRegFail = data => {
  return {
    type: DUMMY_FAIL,
    data,
  };
};
