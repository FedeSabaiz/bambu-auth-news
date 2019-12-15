import React, {useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from './utils/firebase';
import 'firebase/auth';
import Navbar from './common/Navbar';
import Home from './views/Home';
import Signup from './views/Signup';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

const Logout = ({setSession}) => {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
        setSession({
            user: null
        })
    }).catch(function(error) {
    // An error happened.
    });
    sessionStorage.removeItem('newsToken');
    console.log('Entre al logout');
    return <Redirect to="/"/>

}

const Routes = () => {

    const [session, setSession] = useState({
        user: null
    });

    return (
        <>
            <Navbar session={session} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" render={() => {
                if(session.user !== null) {
                    return <Redirect to="/dashboard"/>
                } else {
                    return <Signup session={session} setSession={setSession} />
                }
            }} />
            <Route exact path="/login" render={() =>{
                return <Login setSession={setSession} />
            }} />
            <Route exact path="/logout" render={() => {
                return <Logout setSession={setSession} />
            }} />
            <Route exact path="/dashboard" component={Dashboard} />
        </>
    );
}
 
export default Routes;