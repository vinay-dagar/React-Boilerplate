import React, { Component } from 'react';
import DefaultLayout from 'layout/default-layout/index';
import userImage from 'assets/img/img1.jpg';
import { connect } from 'react-redux';
import FormFieldInput from 'components/form-field-input';
import Actions from './actions';
import { updateUser } from 'actions/auth'

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (payload) => {
            dispatch(updateUser(payload))
        }
    }
}

class Profile extends Component {

    state = {
        fullName: '',
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
        state: '',
        address: '',
    }

    componentWillMount() {
        this.setState({
            'fullName': this.props.user.fullName,
            'email': this.props.user.email,
            'phoneNumber': this.props.user.phoneNumber,
            'country': this.props.user.country,
            'city': this.props.user.city,
            'state': this.props.user.state,
            'address': this.props.user.address,
        })
    }

    render() {
        return (
            <DefaultLayout>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="user-profile-box m-b-3">
                            <div className="box-profile text-white"> <img className="profile-user-img img-responsive img-circle m-b-2" src={userImage} alt="User profile picture" />
                                <h3 className="profile-username text-center">{this.props.user.fullName || 'NA'}</h3>
                                <p className="text-center">© alexanderpierce</p>
                                <p className="text-center">Praesent libero. Sed cursus ante dapi bus diam. Sed nisi nulla quis sem at nibh elementum imperdiet. Duis sagi diam ipsum resent.</p>
                            </div>
                        </div>
                        <div className="card m-b-3">
                            <div className="card-body">
                                <div className="box-body"> <strong><i className="fa fa-user-o margin-r-5"></i> Name</strong>
                                    <p className="text-muted"> {this.props.user.fullName || 'NA'} </p>
                                    <hr />
                                    <strong><i className="fa fa-map-marker margin-r-5"></i> Location</strong>
                                        <p className="text-muted">{this.props.user.city || 'NA'}, {this.props.user.state || 'NA'}</p>
                                    <hr />
                                    <strong><i className="fa fa-envelope margin-r-5"></i> Email address </strong>
                                    <p className="text-muted">{this.props.user.email || 'NA'}</p>
                                    <hr />
                                    <strong><i className="fa fa-phone margin-r-5"></i> Phone</strong>
                                    <p>{this.props.user.phoneNumber || 'NA'}</p>
                                    <hr />
                                    {/* <strong><i className="fa fa-map-marker margin-r-5"></i> Address</strong>
                        <div className="embed-container maps">
                        <iframe className="full-wid" src="https://maps.google.co.in/maps?sll=34.0204989,-118.4117325&amp;sspn=0.8745562,1.4073488&amp;cid=16298491244936825076&amp;q=Los+Angeles,+CA,+USA&amp;ie=UTF8&amp;hq=&amp;hnear=Los+Angeles,+Los+Angeles+County,+California,+United+States&amp;t=m&amp;ll=34.052234,-118.243685&amp;spn=0.697085,0.848982&amp;output=embed"></iframe>
                        </div>
                        <hr/>
                        <strong><i className="fa fa-phone margin-r-5"></i> Social Profile</strong>
                        <div className="text-left"> <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a> <a className="btn btn-social-icon btn-google"><i className="fa fa-google-plus"></i></a> <a className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a> <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a> </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card tab-style1">
                            <ul className="nav nav-tabs profile-tab" role="tablist">
                                <li className="nav-item"> <a className="nav-link" data-toggle="tab" role="tab" aria-expanded="true">Profile</a> </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active show" id="settings" role="tabpanel" aria-expanded="true">
                                    <div className="card-body">
                                        <form className="form-horizontal form-material" onSubmit={Actions.updateUserProfile.bind(this)} >
                                            <div className="form-group">
                                            <FormFieldInput 
                                                inputValue={this.state.fullName}
                                                handleChange={Actions.handleNameChange.bind(this)}
                                                attribute="Full Name" 
                                                inputType="text" 
                                                placeholder="Full Name"
                                                label="Full Name" 
                                                required={true}
                                            />
                                                {/* <label className="col-md-12">Full Name</label>
                                                <div className="col-md-12">
                                                    <input placeholder="Florence Douglas" className="form-control form-control-line" type="text" />
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                <FormFieldInput 
                                                    inputValue={this.state.email}
                                                    handleChange={Actions.handleEmailChange.bind(this)}
                                                    inputType="email" 
                                                    placeholder="Email"
                                                    label="Email" 
                                                    required={true}
                                                    disabled={true}
                                                />
                                                {/* <label  className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input placeholder="florencedouglas@admin.com" className="form-control form-control-line" name="example-email" id="example-email" type="email" />
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                <FormFieldInput 
                                                    inputValue={this.state.phoneNumber}
                                                    handleChange={Actions.handlePhoneChange.bind(this)}
                                                    inputType="number" 
                                                    placeholder="Phone"
                                                    label="Phone" 
                                                    required={true}
                                                />
                                                {/* <label className="col-md-12">Phone No</label>
                                                <div className="col-md-12">
                                                    <input placeholder="123 456 7890" className="form-control form-control-line" type="text" />
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                <FormFieldInput 
                                                    inputValue={this.state.city}
                                                    handleChange={Actions.handleCityChange.bind(this)}
                                                    inputType="text" 
                                                    placeholder="City"
                                                    label="City" 
                                                    required={true}
                                                />
                                                {/* <label  className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input placeholder="florencedouglas@admin.com" className="form-control form-control-line" name="example-email" id="example-email" type="email" />
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                <FormFieldInput 
                                                    inputValue={this.state.state}
                                                    handleChange={Actions.handleStateChange.bind(this)}
                                                    inputType="text" 
                                                    placeholder="State"
                                                    label="State" 
                                                    required={true}
                                                />
                                                {/* <label  className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input placeholder="florencedouglas@admin.com" className="form-control form-control-line" name="example-email" id="example-email" type="email" />
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                <FormFieldInput 
                                                    inputValue={this.state.address}
                                                    handleChange={Actions.handleAddressChange.bind(this)}
                                                    inputType="text" 
                                                    placeholder="Address"
                                                    label="Address" 
                                                    required={true}
                                                />
                                                {/* <label  className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input placeholder="florencedouglas@admin.com" className="form-control form-control-line" name="example-email" id="example-email" type="email" />
                                                </div> */}
                                            </div>
                                            <div className="form-group">
                                                
                                                <label className="col-sm-12">Select Country</label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line">
                                                        <option>London</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button type="submit" className="btn btn-success">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);