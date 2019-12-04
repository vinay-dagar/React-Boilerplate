import api from '../../services/api';
import utilities from '../../services/utilities';

export const login = async (email, password) => {
    try {
        
        return await api.postWithoutHeaders('login', {email, password});

    } catch (error) {
        utilities.message.error(error.message)
        
        return error
    }
}