import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDoc, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig.js";


function generateQRC(){
    let result = document.querySelector('#QRC');
    let linkField = document.querySelector('#link-input');
    let link = linkField.value;
    console.log(link);
    let img = '';
    img += `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${link}&amp;size=800x800" alt="" title="" />`;
    //API Link format => API->Data(Link)->size(Pixels)
    //Change pixel size accordingly
    result.innerHTML = img;
}

//The following is the HTML to use the above function
//<div id="QRC"></div>

//routing functions
async function route(title, url){
    document.title = title;
    let display = document.querySelector('#display');
    if(url === null){
        display.innerHTML = '';
    }
    else{
        let responce = await fetch(url);
        display.innerHTML = await responce.text();
    }
}

function getClick(event){
    let site = event.target;
    let text = site.text;
    let url = site.href;
    route(text,url);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);


async function getdata()
{
    console.log("Testing");
    const citiesCol = collection(db, 'database');  //calling the database
    const citySnapshot = await getDocs(citiesCol); //getting the data from database
    const cityList = citySnapshot.docs.map(doc => doc.data()); /// doing a map and get the data from it. 
    return cityList;
}

async function senddata()
{
    
}
//database for the files
//henry - the let array is the json file
let array = await getdata();
console.log(array);