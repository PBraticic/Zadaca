let polje = [1,2,3,4,5,6,7,8,9,10];
function djeljivi(array){
    let len = array.length;
    for(let i=0; i  < len; i++){
        if(array[i]%3==0){
            console.log(array[i]);
        }
       
    }
    
        
}
djeljivi(polje);