const action = {
    onEmailChange(e) {
        this.setState({'email': e.target.value});
    },

    onPasswordChange(e) {
        this.setState({'password': e.target.value});
    },
    onUserNameChange(e) {
        this.setState({'userName': e.target.value});
    },

    async register(event) {
        try {
            event.preventDefault()
            if(!this.state.email) window.$message.error('Email is required!');
            if(!this.state.password) window.$message.error('Password is required!');

            await window.$http.postWithoutHeaders('register', {
                fullName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
            });

            this.props.history.push('/login');
            alert('Registerd! Login to continue')
        } catch (error) {
            // window.$utility.message.error(error.message);
            alert(error.message)
            console.log(error)
        }
    }
}

export default action;