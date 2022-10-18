function Convert(num){
    s = Math.floor(num/60);
    m = num%60;
    return( s + " sata "+" i "+m+" minuta").toString();
}
console. log(Convert(120));