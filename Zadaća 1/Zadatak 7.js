let x = 50; 
let result;
function isIt()
{			
    if(x>0&&x<1000){
         result= ""+x+" je unutar [0,1000]";  
    }
    else{
         result=""+x+" nije unutar [0,1000]";
    }
    console.log(result);  
}
isIt();