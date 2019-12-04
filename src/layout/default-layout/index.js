import React from 'react';
import Header from './header';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
// import SideBar from './sidebar';

export default (props) => {
    return (
        <div className="wrapper">
            <Header />
            {/* <SideBar /> */}
            <main>
                <ToastContainer />
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
