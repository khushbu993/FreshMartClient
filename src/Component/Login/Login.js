import React from 'react';
import { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config/firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Header from '../Header/Header';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName, email
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
                console.log(signedInUser);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-5">
                    <button onClick={handleGoogleSignIn} class="btn btn-warning" type="button">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;