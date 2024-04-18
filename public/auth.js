import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { getAuth,signInWithPopup,GoogleAuthProvider,signInAnonymously } from "firebase/auth";

const email_text = document.querySelector('#email_phone');
const pass_text = document.querySelector('#password');

const Login = document.querySelector('#Google');

const auth = getAuth();
const provider = new GoogleAuthProvider();

async function handleGoogleLogin() {
    signInWithPopup(auth, provider)
    .then((result) => {

      // Handle successful Google sign-in logic here

      // (e.g., access user info, redirect to another page)

      const user = result.user;

      console.log(user);

      // Redirect to another page

      window.location.href = "home.html";
    })
    .catch((error) => {
    
      // Handle errors during Google sign-in

      const errorCode = error.code;

      const errorMessage = error.message;

      console.error(errorCode, errorMessage);
    });
}

function AnonymousLogin(){

}

Login.addEventListener('click', handleGoogleLogin);