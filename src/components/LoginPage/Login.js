import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { ContextUser } from '../../App';
import './Login.css'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const {value1} = useContext(ContextUser)
    const [loggedInUser,setLoggedInUser] = value1

    const storeToken = () =>{
      firebase.auth().currentUser.getIdToken(true)
      .then(function(idToken) {
        sessionStorage.setItem('token',idToken)
      })
      .catch(function(error) {
        console.log(error);
      });
    }

    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const credential = result.credential;
    const token = credential.accessToken;
    const user = result.user;
    const {displayName,email,emailVerified} = user
    const signInUser = {name:displayName,email:email,isSignIn:emailVerified}
    setLoggedInUser(signInUser)
    storeToken();
    history.replace(from)
    console.log(user)
  })
  .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage)
  });
    }
    return (
      <div class="form-wrapper" onClick={handleGoogleSignIn}>
      <header> 
        <h1>Login</h1>
        <a href="#" class="btn in-signon"><i class="zmdi zmdi-google-glass   zmdi-hc-2x"></i>Sign in with Google</a>
      </header>
    </div>
    );
};

export default Login;