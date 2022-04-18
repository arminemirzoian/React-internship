import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav' >
            <div className='links'>
                <div><Link to='/'>Users</Link></div>
                <div><Link to='/albums'>Albums</Link></div>
                <div><Link to='/tables'>Tables</Link></div>
                <div><Link to='/CRUD'>CRUD</Link></div>
                <div><Link to='/Edit'>Edit</Link></div>
            </div>
        </nav>
    )
}

export default Navbar;