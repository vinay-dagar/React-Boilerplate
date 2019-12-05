import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {},
}

export default function(state = initialState, {type, payload}) {
    switch (type) {
        case LOGIN: {
            localStorage.setItem('x-access-token', payload.token)
            localStorage.setItem('user', JSON.stringify(payload.user))

            return {
                ...state,
                user: payload.user,
                isAuthenticated: true
            };
        }
        case LOGOUT: {
            localStorage.clear()
            state = {
                ...state,
                user: {},
                isAuthenticated: false
            }
            return state
        }
        default: return state
    }
}