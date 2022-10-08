import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
     
       
        <div className="formContainer ">
        <div className="formWrapper">
            <span className="logo font-sans" >My chat</span>
            
            <form>
                
               
                <input className='p-1 rounded-sm border-blue-500 border-2' type="email" placeholder="email"/>
             
                <input className='p-1 rounded-sm border-blue-500 border-2' type="password" placeholder="password"  />
              
                
                
                <button className='w-full bg-blue-600 rounded-sm p-2 text-white font-semibold'>Login</button>
      

            </form>
            <p>don't you have an account ? <Link to="/signUp">Register</Link></p>
        </div>
    </div>
    );
};

export default Login;