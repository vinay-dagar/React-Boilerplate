import React from 'react';
import Header from './header';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import SideBar from './sidebar';
import Actions from './action';
import Nav from './nav';

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (payload) => {
            dispatch(logout())
        }
    }
}

class DefaultLayout extends React.Component {

    render() {
        const {user} = this.props.user;
        return (
            <div className="wrapper boxed-wrapper">
                <ToastContainer />
                <Header logout={Actions.logout.bind(this)} user={user} />
                <SideBar />
                <main>
                    <div className="content-wrapper">
                        <Nav />
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)