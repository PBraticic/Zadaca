let x = 53; 
let result;
function isIt()
{			
    if(x>100&&x<150000){
         result= ""+x+" je unutar [100,150000]";  
    }
    else{
         result=""+x+" nije unutar [100,150000]";
    }
    console.log(result);  
}
isIt();