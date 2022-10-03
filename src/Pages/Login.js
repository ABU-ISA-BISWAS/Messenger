import React from 'react';

const Login = () => {
    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo" >Kawsar's chat</span>
            <span className="title" >Register</span>
            <form>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your password"  />
                <input type="file" placeholder="Select file"  /> 
                <button>Sign up</button>
      
      
            </form>
            <p>Do you have an account ? login</p>
        </div>
    </div>
    );
};

export default Login;