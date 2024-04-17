import { initializeApp } from 'firebase/app';
import { getAuth,connectAuthEmulator,signInWithEmailAndPassword, } from 'firebase/auth';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyA-5TI2nM6J0nTiV5vIGvxSPHkPfA51Q5o",
    authDomain: "uwicentralhub-f5cf4.firebaseapp.com",
    projectId: "uwicentralhub-f5cf4",
    storageBucket: "uwicentralhub-f5cf4.appspot.com",
    messagingSenderId: "351960244221",
    appId: "1:351960244221:web:60197735aadec87ffdc394",
    measurementId: "G-K7KHHT09R4"
});

let email_text = document.querySelector('#email_phone');
let pass_text = document.querySelector('#password');

let next_button = document.querySelector('#Next');

const auth = getAuth(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:5000/");

const loginEmail = async () => {
    const Email = email_text.value;
    const Pass = pass_text.value;
    const Credential = await signInWithEmailAndPassword(auth,Email,Pass);
    console.log(Credential.user);
}

next_button.addEventListener('click',loginEmail);