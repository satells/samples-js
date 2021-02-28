import { soma } from './functions.js';

console.log("teste");

var btnSend = document.querySelector(".btnSend");
var btnSubmit = document.querySelector(".btnSubmit");


console.log(btnSend);
console.log(btnSubmit);

var body = document.body;
    body.addEventListener("click", (event)=>{
        console.log("carregado");


    });



btnSend.addEventListener("click", (event) => {
    console.log(soma("soma é", 50, 99));
    console.log(document.body);
});
var i = 0;
btnSend.addEventListener("mouseover", (event) => {
    console.log("mouse over." + i++);

});


btnSubmit.addEventListener("click", (event) => {
    console.log("submiting");
    alert("submiting");
});


