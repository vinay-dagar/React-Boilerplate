import React from 'react';
import Header from './header';
import Footer from './footer';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';
import SideBar from './sidebar';
import Actions from './action';
import { useHistory, Route } from 'react-router-dom';

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

class DefaultLayout extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <ToastContainer />
                <Header logout={Actions.logout.bind(this)} />
                <SideBar />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)