import React from 'react';
import isa from "../img/isa.jpg"

const Footer = () => {
    
    const y =new Date().getFullYear()
   
    return (
        <div className='footer'>
            <img className='h-20 w-20 mr-4 rounded-full' src={isa} alt="" />
            <p>Copyright @{y} </p>
        </div>
    );
};

export default Footer;