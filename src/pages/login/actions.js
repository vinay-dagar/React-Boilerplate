const action = {
    onEmailChange(e) {
        this.setState({'email': e.target.value});
    },

    onPasswordChange(e) {
        this.setState({'password': e.target.value});
    },

    async login(event) {
        try {
            event.preventDefault()

            console.log(this.props, 'props')


            // if(!this.state.email) window.$message.error('Email is required!');
            // if(!this.state.password) window.$message.error('Password is required!');

            // const result = await window.$http.postWithoutHeaders('login', {
            //     email: this.state.email,
            //     password: this.state.password,
            // });

            // // save user in local storage or redux
            // localStorage.setItem('user', JSON.stringify(result.user))
            // localStorage.setItem('x-access-token', result.token)
            // this.props.history.push('/');
        } catch (error) {
            window.$utility.message.error(error.message);
            console.log(error)
        }
    }
}

export default action;