import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import messenger from "../img/messenger.png"
import Footer from '../components/Footer';


const Login = () => {
    const [err , setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;


        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');

        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };
    return (

        <div className='login'>
            
            <div className='text-center text-4xl text-gray-700  heading '>
            <img className='h-24 w-24' src={messenger} alt="" />
            <p >Connect with your friends</p>
            </div>
           
            <div className="formContainer ">
           
           
            <div className="formWrapper">
            
                <span className="logo font-sans" >My chat</span>

                <form onSubmit={handleSubmit}>


                    <input className='p-1 rounded-sm border-blue-500 border-2' type="email" placeholder="email" />

                    <input className='p-1 rounded-sm border-blue-500 border-2 input-xs' type="password" placeholder="password" />



                    <button className='w-full bg-blue-600 rounded-sm p-2 text-white font-semibold'>Login</button>


                </form>
                <p>don't you have an account ? <Link to="/signUp">Register</Link></p>
            </div>
        </div>
        <Footer></Footer>
        </div>

    );
};

export default Login;