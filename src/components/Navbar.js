import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>My Chat</span>
            <div className="user">
                <img src="https://i.ibb.co/Dt7DTk5/bg.jpg" alt="" />
                <span>John</span>
                <button>logout</button>
            </div>
        </div>
    );
};

export default Navbar;