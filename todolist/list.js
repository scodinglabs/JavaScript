var list =[];
var flag,start;
var input;
 do{ 
     if(!start){
       input= prompt("What would you like to do?(list/new/quit)");
     }
      if(input === "list"){
            if(flag){
            console.log(list);   
            }else{
                console.log("ToDo List is empty. Would you like to add?");
                input = prompt("Enter new or quit");
                start = true;
            }
      }else if(input === "new"){
            flag = true;   
            var newToDo = prompt("Enter item to the ToDo list");
            if(newToDo !== "quit"){
               do{
                     list.push(newToDo);
                     newToDo = prompt("Enter item to the ToDo list");
                 }while(newToDo !== "quit");
            }
            if(newToDo === "quit"){
              input = "quit";
            }
            

        }else if (input === "quit"){
            console.log("Quitting the app.");
        }
    }while(input === "new")
     
if(flag){     
//    for(var i =0;i<list.length ;i++){
//       console.log(list[i]);   
//    }
    list.forEach(function(list){
    console.log(list);
});
}
