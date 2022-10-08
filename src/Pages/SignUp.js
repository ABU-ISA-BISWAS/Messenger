import React from 'react';
import { Link } from 'react-router-dom';
import Add from "../img/addAvatar.png";

const SignUp = () => {
    return (
        <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">My Chat</span>
        <span className="title">Register</span>
        <form>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
    );
};

export default SignUp;