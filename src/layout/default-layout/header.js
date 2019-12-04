import React from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';
import Action from './action';

const mapStateToProps = (state) => {
    return {
        logout: state.logout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (payload) => {
            dispatch(logout())
        }
    }
}

class Header extends React.Component {
    render() {
        return (
            <Router>
                <MDBNavbar fixed color="white" expand="md">
                    <MDBNavbarBrand>
                        <div className="blue-text h3" >Biolerplate</div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler color="#000" />
                    <MDBCollapse id="navbarCollapse3" navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                {/* <MDBNavLink to="#!">Home</MDBNavLink> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                {/* <MDBNavLink to="#!">Features</MDBNavLink> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                {/* <MDBNavLink to="#!">Pricing</MDBNavLink> */}
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline ">Dropdown</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="twitter" />
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBDropdown>
                                    <MDBDropdownToggle className="dopdown-toggle" nav>
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                                            style={{ height: "45px", padding: 0 }} alt="" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="setting">Settings</MDBDropdownItem>
                                        <MDBDropdownItem onClick={Action.logout.bind(this)} >Log Out</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)