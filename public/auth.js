import {firebaseConfig} from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut , createUserWithEmailAndPassword} from "firebase/auth";

const email_text = document.querySelector('#email_phone');
const pass_text = document.querySelector('#password');

const email = email_text.value;
const pass = pass_text.value;

const auth = getAuth();

function createUser(email, pass){
    createUserWithEmailAndPassword(auth,email,pass)
        .then((userCredential) =>{
            const user = userCredential.user;
            console.log("User made success");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("User not made");
        });
}