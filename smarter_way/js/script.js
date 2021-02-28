import { soma } from './functions.js';

console.log("teste");

var btnSend = document.querySelector(".btnSend");
var btnSubmit = document.querySelector(".btnSubmit");


console.log(btnSend);
console.log(btnSubmit);




btnSend.addEventListener("click", (event) => {
    var numeros = [1, 2, 3, 4, 5, 6, 78, 9, "Rua desembargador rocha portala"];
    console.log(numeros);

    console.log(soma(1974, 1974));

    var nome = "Mauro Sergio de Sá Telles";
    console.log(nome.toLowerCase());
    console.log(nome.repeat(10));
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);

    }
    numeros = [];



    console.log(numeros);


    numeros.concat()

});

btnSubmit.addEventListener("click", (event) => {
    console.log("submiting");
    alert("submiting");
});


