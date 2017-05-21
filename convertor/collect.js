var age =prompt("Enter your age(1 or above) to find out how many days passed since your brith");
alert(age*365 + "days passed since your birth");

    
 if(age<18){
  console.log("You cannot enter the venue");   
 }else if(age>18 && age<21){
     
 console.log("You can enter but cannot drink");
 }else{
  console.log("You can enter and drink");   
 
alert("You can enter and drink");   
 }
var sqrt = Math.sqrt(age);

if((age % sqrt) ==0){
 alert("Perfect square");   
}
