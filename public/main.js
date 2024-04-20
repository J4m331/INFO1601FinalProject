
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDoc, getDocs,addDoc} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
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

async function getdata()
{
    console.log("Testing");
    const citiesCol = collection(db,'database');  //calling the database
    const citySnapshot = await getDocs(citiesCol); //getting the data from database
    const cityList = citySnapshot.docs.map(doc => doc.data()); /// doing a map and get the data from it. 
    return cityList;
}


let array = await getdata();

function content(records)
{
    let result =document.querySelector('#recom');
    let html = '';
    for(let record of records){
    html+=`
    <div class="recommendedTile" data-title= ${record.Name} data-description=${record.description} onclick="openPopup(this)">
    <span class="close" onclick="closePopup()">&times;</span>
    <img src="${record.picture}">

    <div class="tilegradient"></div>

      <div class="tiletxt">
        <h3>${record.Name}</h3>
    </div>
  </div>`;
    }
    
    result.innerHTML =html;
}


function contentfood(records)
{
    let result =document.querySelector('#foods');
    let html = '';
    for(let record of records)
    {
        if(record.Category == "Vendor")
        {
            html+=`
            <div class="recommendedTile" onclick="openPopup()">
            <span class="close" onclick="closePopup()">&times;</span>
            <img src="${record.picture}">

            <div class="tilegradient"></div>

            <div class="tiletxt">
                <h3>${record.Name}</h3>
            </div>
        </div>
                `;
        }
            
    }
    result.innerHTML =html;
}

function contentsport(records)
{
    let result =document.querySelector('#sport');
    let html = '';
    for(let record of records)
    {
        if(record.Category == "Sports")
        {
            html+=`
            <div class="recommendedTile" onclick="openPopup()">
            <span class="close" onclick="closePopup()">&times;</span>
            <img src="${record.picture}">

            <div class="tilegradient"></div>

            <div class="tiletxt">
                <h3>${record.Name}</h3>
            </div>
        </div>
                `;
        }
            
    }
    result.innerHTML =html;
}

function contentuwi(records)
{
    let result =document.querySelector('#UWI');
    let html = '';
    for(let record of records)
    {
        if(record.Category == "UWI")
        {
            html+=`
            <div class="recommendedTile" onclick="openPopup()">
            <span class="close" onclick="closePopup()">&times;</span>
            <img src="${record.picture}">

            <div class="tilegradient"></div>

            <div class="tiletxt">
                <h3>${record.Name}</h3>
            </div>
        </div>
                `;
        }
            
    }
    result.innerHTML =html;
}

contentfood(array);
contentsport(array);
contentuwi(array);
content(array);