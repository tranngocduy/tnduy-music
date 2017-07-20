import { FETCH_LOADING, FETCH_SUCCESS, FETCH_ERROR } from '../action/fetchHomeList';

const INITAL_STATE = {
    isLoading: false,
    Success: null,
    isError: false
}
export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return { isLoading: true, Success: null, isError: false };
        case FETCH_SUCCESS:
            return { isLoading: false, Success: action.payload, isError: false };
        /*case FETCH_ERROR:
            return { isLoading: false, Success: null, isError: true };*/
        default:
            return state;
    }
}