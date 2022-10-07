import { GET_DATA, GET_DATA_ERROR } from '../actions/types'

const initialState ={
    loading: true,
    data: []
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case GET_DATA_ERROR:
            return {
                ...state,
                loading: false,
                data: null
            }
        default:
            return state;
    }
}