import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';

const Routes = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
        </>
    );
}
 
export default Routes;