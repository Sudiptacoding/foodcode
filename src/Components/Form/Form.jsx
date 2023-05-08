import { useForm } from "react-hook-form";
import './Form.css'
import { useState } from "react";
import { auth } from "../../firebase.config";

import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

import { GithubAuthProvider } from "firebase/auth";
const gitprovider = new GithubAuthProvider();
// tost
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Form = () => {
    const [toggol, setToggol] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // login

    const onSubmit1 = (data, e) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                toast("Sign in successfully");
                navigate("/")
            })
            .catch(() => {
                toast('User not found');
            });

        e.target.reset();
    };


    // sign in
    const onSubmit = (data, e) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                toast('User create successfully');
                updateProfile(auth.currentUser, {
                    displayName: data.name, photoURL: data.photo || "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
                }).then(() => {

                }).catch((error) => {
                    toast(error.message);
                });
            })
            .catch((error) => {
                toast(error.message);
            });
        // userProfileUpded(data.name)
        e.target.reset();
        setToggol(false)
    };

    // google
    const navigate = useNavigate()

    const handelGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                toast("Sign in successfully");
                navigate('/')
            }).catch((error) => {
                toast(error.message);
            });
    }

    // github
    const handelGithub = () => {
        signInWithPopup(auth, gitprovider)
            .then(() => {
                toast("User login successfully");

            }).catch((error) => {
                toast(error.message);
            });
    }

    return (
        <div className="form-section">
            <div className="loging-form">
                <div>
                    {
                        toggol ?
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2>Sign up</h2>
                                <input  {...register("name")} placeholder="Enter your Name" />
                                {/* include validation with required or other standard HTML validation rules */}
                                <input {...register("email", { required: true })} placeholder="Enter your Email" />
                                {errors.email && <span>This field is required</span>}

                                <input {...register("password", { required: true, maxLength: 6 })} placeholder="Enter your password" />
                                {errors.password && <span>This field is required</span>}
                                <input  {...register("photo")} placeholder="Enter your photo url" />
                                <button type="submit">Submit</button>
                                <ToastContainer
                                    position="top-center"
                                />

                            </form> :
                            <form onSubmit={handleSubmit(onSubmit1)}>
                                <h2>Log in</h2>
                                {/* include validation with required or other standard HTML validation rules */}
                                <input {...register("email", { required: true })} placeholder="Enter your Email" />
                                {errors.email && <span>This field is required</span>}

                                <input {...register("password", { required: true, minLength: 6 })} placeholder="Enter your password" />
                                {errors.password && <span>This field is required</span>}

                                <button type="submit">Submit</button>
                                <ToastContainer
                                    position="top-center"
                                />
                            </form>
                    }
                </div>

                <div className="toggol-b">{toggol ? "Not have an account" : "Have an account"} <strong onClick={() => setToggol(!toggol)}>{toggol ? "Sign Up Here" : "Log in Here"}</strong></div>
                <div className="google">
                    <div><button onClick={handelGoogle}>Google sign in</button><ToastContainer
                        position="top-center"
                    /></div>
                    <div><button onClick={handelGithub}>Github sign in</button><ToastContainer
                        position="top-center"
                    /></div>
                </div>
            </div>
        </div>
    );
};

export default Form;