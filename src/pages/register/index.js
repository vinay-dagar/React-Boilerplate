import React, { Component } from 'react'
import FormLayout from 'layout/form-layout';
import LinkInline from 'components/link-inline';
import FormFieldInput from 'components/form-field-input';
import Actions from './actions'

const Footer = () => (
    <div>
        <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a className="btn btn-block btn-social btn-facebook btn-flat" href={process.env.REACT_APP_FB_SOCIAL_LOGIN}>
                <i className="fa fa-facebook"></i> Sign up using Facebook
            </a> 
            <a className="btn btn-block btn-social btn-google btn-flat" href={process.env.REACT_APP_GOOGLE_SOCIAL_LOGIN}>
                <i className="fa fa-google-plus"></i> Sign up using Google+
            </a> 
        </div>
        <div className="m-t-2">
            Already have an account?  
            <LinkInline 
                inputClass="text-center ml-1"
                route="login"
                label='Sign In'
            />
        </div>
    </div>
)


export default class register extends Component {
    state = {
        email: '',
        password: '',
        userName: ''
    }

    render() {
        return (
            <FormLayout
                label="Register"
            >
                <form onSubmit={Actions.register.bind(this)} method="post">
                    <div className="form-group has-feedback">
                        <FormFieldInput 
                            value={this.state.userName}
                            handleChange={Actions.onUserNameChange.bind(this)}
                            inputType="text" 
                            placeholder="Username" 
                            required={true}
                            label="User Name"
                        />
                    </div>
                    <div className="form-group has-feedback">
                        <FormFieldInput 
                            value={this.state.email}
                            handleChange={Actions.onEmailChange.bind(this)}
                            attribute="Email" 
                            inputType="email" 
                            placeholder="Email" 
                            required={true}
                            label="Email"
                        />
                    </div>
                    <div className="form-group has-feedback">
                        <FormFieldInput 
                            value={this.state.password}
                            handleChange={Actions.onPasswordChange.bind(this)}
                            attribute="password" 
                            inputType="password" 
                            placeholder="password" 
                            required={true}
                            label="Password"
                        />
                    </div>
                    <div className="col-xs-8">
                        <div className="checkbox icheck">
                            <LinkInline 
                                inputClass="pull-right"
                                route="forgot-password"
                            >
                                {/* <i className="fa fa-lock"></i> Forgot Password ? */}
                            </LinkInline>
                        </div>
                    </div>
                    <div className="col-xs-4 m-t-1">
                        <button type="submit" className="btn btn-primary btn-block btn-flat">Register With Us</button>
                    </div>
                </form>
                <Footer/>
            </FormLayout>
        );
    }
}
