import {firebaseConfig} from "./firebaseConfig";
import { getAuth,signInWithPopup,GoogleAuthProvider } from "firebase/auth";

const email_text = document.querySelector('#email_phone');
const pass_text = document.querySelector('#password');

const Login = document.querySelector('#Google');

const auth = getAuth();
const provider = GoogleAuthProvider();

function handleGoogleLogin() {
    signInWithPopup(auth, provider)
    .then((result) => {
        // Handle successful Google sign-in logic here
        // (e.g., access user info, redirect to another page)
    })
    .catch((error) => {
        // Handle errors during Google sign-in
    });
}

Login.addEventListener('click', handleGoogleLogin);