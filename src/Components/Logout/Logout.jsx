import React from 'react';
import './Logout.css'
import { signOut } from "firebase/auth";
import { auth } from '../../firebase.config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const navigate = useNavigate()
    const handelDelet = () => {
        signOut(auth).then(() => {
            toast("Are you sure to logout");
            navigate('/')
        }).catch((error) => {
            toast(error.message);
        });
    }
    return (
        <div className='logout'>
            <button onClick={handelDelet}>Log out</button>
            <ToastContainer
                position="top-center"
            />
        </div>
    );
};

export default Logout;