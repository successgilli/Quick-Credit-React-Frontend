import React from 'react';

import { Route, Switch } from 'react-router-dom';

import User from './components/user.jsx';
import Aside from './components/aside.jsx';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={User} />
        <Route path='/apply' component={User} />
        <Route path='/profile' component={User} />
    </Switch>
)

export default Routes;
