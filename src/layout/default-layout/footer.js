import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const footer  = (props) => {
    return (
        <MDBFooter color="white" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <h5 className="title black-text">Footer Content</h5>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid className="black-text">
                    &copy; {new Date().getFullYear()} Copyright: <a href="http://www.mindrops.com/" className="black-text"> Mindrops.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )
}
export default footer