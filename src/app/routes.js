import React from 'react'
import { Switch, Route  } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'
import UserProfile from '../pages/user-profile'
import Setting from '../pages/settings'
import ManageUser from '../pages/manage-user'
import Notification from '../pages/notification'
import Home from '../pages/home'

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/profile' component={UserProfile}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/manage-user' component={ManageUser}/>
            <Route path='/notification' component={Notification}/>
        </Switch>
    )
}