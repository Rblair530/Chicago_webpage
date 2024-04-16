
let counter=1
 
 function slideRoater(){
    
    // here we put "!" to correct the null error after the object
    const slideElm=document.getElementById('radio'+ counter)! as HTMLInputElement;
    slideElm.checked = true;
    counter++;
    console.log(counter)
    if(counter> 4){
       counter=1
    }
 }
// named export
 export {
    slideRoater
 }





