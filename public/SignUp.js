import { getAuth,connectAuthEmulator,signInWithEmailAndPassword, } from 'firebase/auth';

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