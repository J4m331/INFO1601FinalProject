import firebaseConfig from "./firebaseConfig";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInAnonymously } from "firebase/auth";

const email_text = document.querySelector('#email_phone');
const pass_text = document.querySelector('#password');

const Login = document.querySelector('#Google');

const auth = getAuth();

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  }
});

async function AnonymousLogin(){
    signInAnonymously(auth)
    .then(() => {
      console.log("Signed IN Anon");
    })
    .catch(() =>{
      console.log("NotSignedIn Anon");
    })
}

Login.addEventListener('click', AnonymousLogin);
async function AnonymousLogin(){
  signInAnonymously(auth)
  .then(() => {
    console.log("Signed IN Anon");
  })
  .catch(() =>{
    console.log("NotSignedIn Anon");
  })
}

Login.addEventListener('click', AnonymousLogin);async function AnonymousLogin(){
    signInAnonymously(auth)
    .then(() => {
      console.log("Signed IN Anon");
    })
    .catch(() =>{
      console.log("NotSignedIn Anon");
    })
}

Login.addEventListener('click', AnonymousLogin);