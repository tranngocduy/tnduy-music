import fetchHome from '../api/fetchHome';

export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchHomeList = () => (dispatch) => {
    dispatch({ type: FETCH_LOADING });
    fetchHome()
        .then(responeJSON => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: responeJSON
            })
        })
        .catch(() => dispatch({ type: FETCH_ERROR }))
}