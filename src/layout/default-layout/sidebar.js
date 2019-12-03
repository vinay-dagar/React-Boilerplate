import React, { Component } from 'react'
import { MDBSideNavCat,  MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBBtn } from "mdbreact";

export default class sidebar extends Component {

    state = {
        sideNavLeft: false,
      }
    
    sidenavToggle = sidenavId => () => {
      const sidenavNr = `sideNav${sidenavId}`
      this.setState({
        [sidenavNr]: !this.state[sidenavNr]
      });
    };

    render() {
        return (
            <MDBContainer>
                <MDBBtn onClick={this.sidenavToggle("Left")}>
                    <MDBIcon size="lg" icon="bars" />
                </MDBBtn>
                <MDBSideNav slim fixed mask="rgba-blue-strong" triggerOpening={this.state.sideNavLeft} breakWidth={1300}
                    className="sn-bg-1">
                    <li>
                        <div className="logo-wrapper sn-ad-avatar-wrapper">
                            <a href="#!">
                                <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
                                <span>Anna Deynah</span>
                            </a>
                        </div>
                    </li>

                </MDBSideNav>
            </MDBContainer>
        )
    }
}
