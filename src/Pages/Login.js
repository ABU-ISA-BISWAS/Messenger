import React from 'react';

const Login = () => {
    return (
       <div className=''>
        <div className=' '>
        <div className="formContainer ">
        <div className="formWrapper">
            <span className="logo" >Kawsar's chat</span>
            <span className="title" >Register</span>
            <form>
                <input type="text" placeholder="Enter your name" />
                <br/>
                <input type="email" placeholder="Enter your email"/>
                <br/>
                <input type="password" placeholder="Enter your password"  />
                <br/>
                <input type="file" placeholder="Select file"  /> 
                <br/>
                <button>Sign up</button>
      

            </form>
            <p>Do you have an account ? login</p>
        </div>
    </div>
        </div>
       </div>
    );
};

export default Login;