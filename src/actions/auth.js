import { LOGIN, LOGOUT } from './types';

export const login = (payload) => (dispatch ) => {
    dispatch({
        type: LOGIN,
        payload,
    })
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    })
};