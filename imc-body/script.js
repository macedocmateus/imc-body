"use strict";
// variáveis - variables
// pegando informações para manipular depois
const form = document.querySelector('form'); // o ponto de exclamação é para a constante pegar um tipo de dado diferente de null, no caso o const form pegou HTMLFormElement
const inputWeight = document.querySelector('#weight'); // o 'as' funciona parecido com exclamação mas o tipo de dado é definido pelo programador
const inputHeight = document.querySelector('#height');
// 3 maneiras de criar e atribuir funções a um evento
// 1
form.onsubmit = function (event) {
    event.preventDefault();
    console.log(event);
};
// 2
// form?.onsubmit = () => {}
// 3
// form?.onsubmit = handleSubmit
// function handleSubmit() {
// }
