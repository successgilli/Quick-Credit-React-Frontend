import React from 'react';

import { Route, Switch } from 'react-router-dom';

import User from './components/user.jsx';

const Routes = () => (
    <Switch>
        <Route path='/' component={User} />
    </Switch>
)

export default Routes;
