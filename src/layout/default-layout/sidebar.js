import React, { Component } from 'react';
import LinkInline from 'components/link-inline';

class Sidebar extends Component {
    state = {
        activeMenu: '/',
    };

    setActiveMenu(val){
        this.setState({
            'activeMenu': val 
        });
    }

    componentWillMount() {
        this.setActiveMenu(window.location.pathname);
    }

    render () {
        const menus =  [{
            route: '/',
            icon: 'fa fa-home',
            label: 'Dashboard',
        }, {
            route: '/manage-user',
            icon: 'fa fa-users',
            label: 'Manage User',
        },  {
            route: '/manage-log',
            icon: 'fa fa-files-o',
            label: 'Manage Logs',
        }, {
            route: '/profile',
            icon: 'fa fa-user',
            label: 'My Profile',
        },{
            route: '/login',
            icon: 'fa fa-power-off ',
            label: 'Logout',
        }];

        // {
        //     route: '/manage-role',
        //     icon: 'fa fa-key',
        //     label: 'Manage Roles',
        // },

        const items = [];

        for(const menu of menus) {
            items.push(
                <li key={menu.route} className={this.state.activeMenu === menu.route ? 'active' : ''} onClick={this.setActiveMenu.bind(this, menu.route)} >
                    <LinkInline route={menu.route}> 
                        <i className={menu.icon}></i> 
                        <span>{menu.label}</span> 
                    </LinkInline>
                </li>
            );
        }

        return (
            <aside className="main-sidebar"> 
                <div className="sidebar"> 
                    <ul className="sidebar-menu">
                        {items}
                    </ul>
                </div>
            </aside>
        );
    }
};

export default Sidebar;