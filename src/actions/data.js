import axios from 'axios'
import { GET_DATA, GET_DATA_ERROR} from './types';

export const getData = () => async dispatch => {

    try {
        const res = await axios.get('http://127.0.0.1:8000/shop/products/');
        dispatch({
            type: GET_DATA,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_DATA_ERROR,
            payload: err
        })
    }
}