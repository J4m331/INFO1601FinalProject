import { signIn, logout, auth, setAuthListeners } from './auth.js';

let loginBtn = document.querySelector('#loginBtn');
let logoutBtn = document.querySelector('#logoutBtn');
let reviewForm = document.querySelector('#reviewForm');

function setLoggedInUI(){
    M.toast({html: 'Logged In!'})
    document.querySelector('#user').innerHTML = `Signed in Anonymously`;
    document.querySelector('#loginBtn').style.display = 'none';
    document.querySelector('#logoutBtn').style.display = 'inline-block';
}

function setLoggedOutUI(){
    M.toast({html: 'Logged Out!'})
    document.querySelector('#user').innerHTML = '';
    document.querySelector('#loginBtn').style.display = 'inline-block';
    document.querySelector('#logoutBtn').style.display = 'none';
}

//attatch listeners
logoutBtn.addEventListener('click', logout);
loginBtn.addEventListener('click', signIn);
reviewForm.addEventListener('submit', submitReivew);
setAuthListeners(setLoggedInUI, setLoggedOutUI);