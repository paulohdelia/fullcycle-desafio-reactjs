import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import UserList from './UserList';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UserList} />
        </BrowserRouter>
    )
}

export default Routes;