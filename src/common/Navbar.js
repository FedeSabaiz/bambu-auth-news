import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import authenticate from '../utils/authenticate';

const Navbar = ({session}) => {

    console.log(session)

    return ( 
        <>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                     
                    <>
                        <li>
                            <Link to='/dashboard'>Dashboard Hola  </Link>
                        </li>
                        <li>
                            <Link to='/logout'>Log out</Link>
                        </li>
                    </> 
                    <>
                        <li>
                            <Link to='/login'>Log In</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Signup</Link>
                        </li>
                    </>
                    
                </ul>
            </nav>    
        </>
    );
}
 
export default Navbar;