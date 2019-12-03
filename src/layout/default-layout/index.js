import React from 'react';
import Header from './header';
import Footer from './footer';
// import SideBar from './sidebar';

export default (props) => {
    return (
        <div className="wrapper">
            <Header />
            {/* <SideBar /> */}
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
