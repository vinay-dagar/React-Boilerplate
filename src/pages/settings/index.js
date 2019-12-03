import React, { Component } from 'react'
import FormFieldInput from 'components/form-field-input';
import FormLayout from 'layout/form-layout'
import Actions from './actions';

export default class Setting extends Component {

    state = {
        oldPassword: '',
        newPassword: '',
    }

    render() {
        return (
            <FormLayout
                label="Change Password"
            >
                <form className="center" onSubmit={Actions.changePassword.bind(this)}>
                    <div className="form-row">
                        <div className="form-group has-feedback">
                            <FormFieldInput
                                value={this.state.email}
                                handleChange={Actions.handleOldPasswordChange.bind(this)}
                                attribute="Old PAssword"
                                inputType="password"
                                placeholder="Old Password"
                                required={true}
                                label="Old Password"
                            />
                        </div>
                        <div className="form-group has-feedback">
                            <FormFieldInput
                                value={this.state.email}
                                handleChange={Actions.handleNewPasswordChange.bind(this)}
                                attribute="New Password"
                                inputType="password"
                                placeholder="New Password"
                                required={true}
                                label="New Password"
                            />
                        </div>
                    </div>
                    <div className="col-xs-4 m-t-1">
                        <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                </form>
            </FormLayout>
        )
    }
}
