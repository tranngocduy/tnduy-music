import { CONTROL_DRAWER } from '../action/controlDrawer';

const INITAL_STATE = { status: false }
export default (state = INITAL_STATE, action) => {
    switch(action.type) {
        case CONTROL_DRAWER:
            return { status: action.payload};
        default:
            return state;
    }
}