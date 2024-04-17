const { default: firebase } = require("firebase/compat/app");

let email_text = document.querySelector('#email_phone');
let pass_text = document.querySelector('#password');

let next_button = document.querySelector('#Next');

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

next_button.onclick = () => auth.signInWithPopup(provider);