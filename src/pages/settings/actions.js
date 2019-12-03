const actions = {
    handleOldPasswordChange(e) {
        this.setState({'oldPassword': e.target.value})
    },

    handleNewPasswordChange(e) {
        this.setState({'newPassword': e.target.value})
    },
    
    async changePassword(event) {
        try {
            event.preventDefault()
            const result = await window.$http.patch('user/change-password', {
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword
            })
            if(!result) return alert('Something went wrong!')

            // window.$utilities.message.success(result.message || 'Password successfully changed')
            alert(result.message)
            this.props.history.push('/');

        } catch (error) {
            // window.$utilities.message.error(error.message || error.object.message)
            alert(error.message)
            console.log(error)
        }
    }
}

export default actions;