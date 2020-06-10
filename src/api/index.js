import axios from 'axios'
import { 
    BASE_URL,
    DUMMY,
    GET_CART,
    LOGIN,
} from '../constants'

export const dummy = () => axios.post(`${BASE_URL}${DUMMY}`)
export const get_cart = (payload) => axios.post(`${BASE_URL}${GET_CART}`, payload)
