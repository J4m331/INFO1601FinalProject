
function generateQRC(link){
    let result = document.querySelector('#QRC');
    let img = '';
    img += `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${link}&amp;size=100x100" alt="" title="" />`;
    //API Link format => API->Data(Link)->size(Pixels)
    //Change pixel size accordingly
    result.innerHTML = img;
}
generateQRC("YES");

//The following is the HTML to use the above function
//<div id="QRC"></div>