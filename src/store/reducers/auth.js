const initialState = {
    isAuthenticated: false,
    user: {},
    notifications: []
}

const authReducer = async (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN': {
            localStorage.setItem('x-access-token', payload.token)
            localStorage.setItem('user', JSON.stringify(payload.user))

            state = {
                ...state,
                user: payload.user,
                isAuthenticated: true
            }
            return state;
        }
        case 'LOGOUT': {

            localStorage.clear()
            state = {
                ...state,
                user: {},
                isAuthenticated: false
            }
            return state
        }
    }
}
export default authReducer;