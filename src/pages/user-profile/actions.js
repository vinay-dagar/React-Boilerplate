const action = {
    handleNameChange(e) {
        this.setState({'fullName': e.target.value});
    },

    handleEmailChange(e) {
        this.setState({'email': e.target.value});
    },

    handlePhoneChange(e) {
        this.setState({'phoneNumber': e.target.value});
    },
    
    handleCityChange(e) {
        this.setState({'city': e.target.value});
    },
    handleStateChange(e) {
        this.setState({'state': e.target.value});
    },
    handleAddressChange(e) {
        this.setState({'address': e.target.value});
    },

    async updateUserProfile(event) {
        try {
            event.preventDefault()

            const data = {
                fullName: this.state.fullName,
                phoneNumber: this.state.phoneNumber,
                city: this.state.city,
                state: this.state.state,
                address: this.state.address,
            }
            const result = await window.$http.put('user', data);

            if(!result) return window.$utility.showErrorMessage('Something went wrong!');
            
            window.$utility.showSucessMessage('Profile successfully updated');
        } catch (error) {
            console.log(error)
            window.$utility.showErrorMessage(error.message);
        }
        
    }
}

export default  action;