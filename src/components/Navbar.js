import React from 'react';
import {signOut} from "firebase/auth"
import { auth } from '../firebase';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>My Chat</span>
            <div className="user">
                <img src="https://i.ibb.co/Dt7DTk5/bg.jpg" alt="" />
                <span>John</span>
                <button onClick={()=>signOut(auth)}>logout</button>
            </div>
        </div>
    );
};

export default Navbar;