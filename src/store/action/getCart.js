import {get_cart} from '../../api';
export const GETCART_OK = 'GETCART_OK';
export const GETCART_FAIL = 'GETCART_FAIL';
export const requestGetCart = (deviceId, token) => dispatch => {

  const payload = {
    deviceId,
    token,
  };

  get_cart(payload).then(({data}) => {
      // dispatch(respRegOk(data));
      console.log('dummyData ', data);
    })
    .catch(e => {
      dispatch(respRegFail(e));
      console.log('dummyData ', e);
    });
};
const respRegOk = data => {
  return {
    type: GETCART_OK,
    data,
  };
};
const respRegFail = data => {
  return {
    type: GETCART_FAIL,
    data,
  };
};
