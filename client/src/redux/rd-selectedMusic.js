import { SELECTED_MUSIC } from '../action/selectedMusic';

const INITAL_STATE = {
    Success: null,
}
export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_MUSIC:
            return { Success: action.payload };
        default:
            return state;
    }
}