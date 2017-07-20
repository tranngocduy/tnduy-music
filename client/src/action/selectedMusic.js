export const SELECTED_MUSIC = 'SELECTED_MUSIC';
export const selectedMusic = (music) => (dispatch) => {
    dispatch({
        type: SELECTED_MUSIC,
        payload: music
    })
}