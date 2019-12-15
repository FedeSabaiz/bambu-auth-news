import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return ( 
        <>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Panel</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>    
        </>
    );
}
 
export default Navbar;