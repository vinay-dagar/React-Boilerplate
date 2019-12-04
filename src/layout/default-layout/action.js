const action = {
    logout(event) {
            event.preventDefault()

            console.log(this.props, 'props')
            this.props.logout()
            this.props.history.push('/login');
            window.$utility.showSucessMessage('Successfully logged out!');
    }
}

export default action;