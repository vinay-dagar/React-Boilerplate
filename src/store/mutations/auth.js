const login = async (email, password) => {
    try {
        const result = await window.$http.post('login', {email, password});

        if(!result) return {
            success: false,
        }

        return {
            success: true,
            result
        };

    } catch (error) {
        console.log(error)
        return {
            success: false,
            error
        }
    }
}