import React from 'react'
import { Switch, Route  } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'
import UserProfile from '../pages/user-profile'
import Setting from '../pages/settings'
import ManageUser from '../pages/manage-user'

export default () => {
    return (
        <Switch>
            <Route exact path='/' component={UserProfile}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/user-profile' component={UserProfile}/>
            <Route path='/setting' component={Setting}/>
            <Route path='/manage-user' component={ManageUser}/>
        </Switch>
    )
}