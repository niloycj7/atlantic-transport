import React, { useContext, useState } from 'react';
import './Login.css';
import facebookIcon from '../../Icon/fb.png';
import googleIcon from '../../Icon/google.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { useHistory, useLocation } from 'react-router';


if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else{
    firebase.app();
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        success: false,
        isLoggedIn: false,
        error: ''

    });
    const [loggedInUser, setLoggedInUser, signOutUser, setSignOutUser] = useContext(UserContext);


    const handleGoogleSignIn = () => {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);

            })

            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(errorCode, errorMessage, email);
            });


    }


    const fbSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email };
                setUser(signedInUser);
                console.log(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);

            })
            .catch(err => {
                const error = err.message;
                console.log(error);
            })


    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isLoggedIn: false,
                    name: '',
                    email: '',
                    error: '',
                    success: false
                }
                setSignOutUser(signedOutUser);
            })
    }

    const handleBlur = (e) => {
        let isFormValid = true;
        const password = e.target.name === 'password'
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (password) {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFormValid = isPasswordValid && passwordHasNumber
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    console.log(res);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                })
                .catch(function (error) {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch(function (error) {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo)
                });
        }
        e.preventDefault()
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then(res => {
                console.log('username updated successfully')
            })
            .catch(err => {
                console.log(err.message)
            });
    }




    return (
        <div className="header">
            <Header />
            <div className='col-md-6 text-center mx-auto border border-secondary p-4  bg-light rounded'>
                <h4 className='mb-3'>Create an account</h4>
                <form onSubmit={handleSubmit}>
                    {
                        newUser &&
                        <input onBlur={handleBlur} className=' border border-secondary w-75 mb-2  rounded p-2 ' placeholder='Name' type="text" name='name' />
                    }
                    <br />
                    <input onBlur={handleBlur} className='border border-secondary w-75 mb-2  rounded p-2' placeholder='Email' type="email" name='email' required />
                    <br />
                    <input onBlur={handleBlur} className='border border-secondary w-75 mb-2  rounded p-2' placeholder='Password' type="password" required name='password' />
                    <br />
                    <input onBlur={handleBlur} className='border border-secondary w-75 mb-2  rounded p-2' placeholder='Confirm Password' type="password" required name='password' />
                    <br/>
                    <input className='btn btn-warning w-75 mb-2  rounded p-2' type="submit" value={newUser ? 'Create an account' : 'Login'} />
                </form>


                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Login'} successfully!</p>

                }
                <p>{newUser ? 'Already have an account?' : "Don't have an account?"} <span style={{ cursor: 'pointer' }} onClick={() => setNewUser(!newUser)} className='text-warning'>{newUser ? 'Login' : 'Create an account'}</span></p>
                <p>Or</p>


                <div style={{ cursor: 'pointer' }} onClick={fbSignIn} className="d-flex mb-2 justify-content-center border border-secondary w-50 py-1 mx-auto rounded-pill" >
                    <img className="social-icon" src={facebookIcon} alt="" />
                    <p className='mb-0  '>Continue with facebook</p>
                </div>


                <div style={{ cursor: 'pointer' }} onClick={handleGoogleSignIn} className="d-flex justify-content-center border border-secondary w-50 py-1 mx-auto rounded-pill" >
                    <img className="social-icon" src={googleIcon} alt="" />
                    <p className='mb-0 '>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;