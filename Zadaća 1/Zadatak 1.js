const conversion = 7.52;
let euri;
function convert(num){
    euri = num * conversion;
}

function myButtonOnclick(){
    let kune = document.getElementById('myText').value;
    convert(kune);
    alert(kune+ "kn je "+euri+"€")  
}