import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './common/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const Routes = () => {
    return (
        <>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" />
            <Route exact path="/dashboard" component={Dashboard} />
        </>
    );
}
 
export default Routes;