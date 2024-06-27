let user= prompt(" enter:- S for Snake, W for Water or G for Gun");
let cpu1= Math.floor(Math.random()*3);
let cpu= ["S","W","G"][cpu1]

const combination=(cpu,user)=>{
 if(cpu==user){
    return "It's a tie";
 }else if(cpu=="S" && user=="W"){
   return "CPU win"
 }
 else if(cpu=="S" && user=="G"){
  return "User win"
}
else if(cpu=="W" && user=="G"){
  return "CPU win"
}
else if(cpu=="W" && user=="S"){
  return "user win"
}  
else if(cpu=="G" && user=="S"){
  return" CPU win"
} 
else if(cpu=="G" && user=="W"){
  return "User win"
}

}
let result=combination(cpu,user)
  
// console.log("The winner is: "+ result)

document.write(`CPU: ${cpu} <br> User: ${user} <br> The winner is: ${result}`)

