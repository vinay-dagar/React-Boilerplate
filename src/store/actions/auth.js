export function fetchNotifications(userId) {
    return {
        type: "FETCH_NOTIFICATION",
        payload: userId
    }
};

export function login(payload) {
    return {
        type: 'LOGIN',
        payload,
    }
};

export function logout() {
    return {
        type: 'LOGOUT'
    }
};