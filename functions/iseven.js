function iseven(number){
    if(number % 2 ===0){
        
     return true;   
    }
return false;
}
var number = prompt("Is this even");
var result = iseven(number);
if(result){
  alert("This number is even" );
}else{
     alert("This number is not even" );
}