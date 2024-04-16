import { getAuth,connectAuthEmulator,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';

let email_text = document.querySelector('#email_phone');
let pass_text = document.querySelector('#password');

let next_button = document.querySelector('#Next');

const auth = getAuth(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:5000/");

const createAccount = async () =>{

}

const loginEmail = async () => {
    const Email = email_text.value;
    const Pass = pass_text.value;

    try{
        const Credential = await signInWithEmailAndPassword(auth,Email,Pass);
        console.log(Credential.user);
    }
    catch(error){
        console.log(error);
    }
}

next_button.addEventListener('click',loginEmail);