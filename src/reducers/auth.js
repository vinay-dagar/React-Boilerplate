import { LOGIN, LOGOUT, UPDATE_USER } from '../actions/types';

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
        case UPDATE_USER: {
            localStorage.removeItem('user')
            localStorage.setItem('user', JSON.stringify(payload))

            return {
                ...state,
                user: payload,
                isAuthenticated: true
            };
        }
        default: return state
    }
}