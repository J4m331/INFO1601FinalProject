


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