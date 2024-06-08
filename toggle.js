 let toggle = document.querySelector("#tog")

 let currenmode = "light";



 toggle.addEventListener("click" , () =>{
   // console.log("trying to change the mode")

  if(currenmode === "light") {
    currenmode = "dark";
    document.querySelector("body").style.backgroundColor = "black" 
  }
 else {
    currenmode = "light"
    document.querySelector("body").style.backgroundColor = "white"
 }

console.log(currenmode)
 })