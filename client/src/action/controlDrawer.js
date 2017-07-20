export const CONTROL_DRAWER = 'CONTROL_DRAWER';
export const controlDrawer = (status) => (dispatch) => {
    dispatch({
        type: CONTROL_DRAWER,
        payload: status
    })
}