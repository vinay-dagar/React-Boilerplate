const initialState = {
    isAuthenticated: false,
    user: {},
    notifications: [] 
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN':{
            return payload
        }
        case 'LOGOUT':{

            return payload
        }
        default:
            return state
    }
}
export default authReducer;