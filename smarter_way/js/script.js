import { simpleFunction, soma } from './functions.js';



var btnSend = document.querySelector(".btnSend");
var btnSubmit = document.querySelector(".btnSubmit");


let btnSendEvent = (event) => {
    console.log(soma("soma é", 50, 99));
    console.log(simpleFunction);
    console.log(simpleFunction());
    simpleFunction();
}


var btnSubmitEvent = (event)=>{
    console.log("submiting");
    alert("submiting");
}



btnSend.addEventListener("click", btnSendEvent);

btnSubmit.addEventListener("click",btnSubmitEvent);


