import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber } from './utils.js';
// pegando informações para manipular depois
const form = document.querySelector('form'); // o ponto de exclamação é para a constante pegar um tipo de dado diferente de null, no caso o const form pegou HTMLFormElement
const inputWeight = document.querySelector('#weight'); // o 'as' funciona parecido com exclamação mas o tipo de dado é definido pelo programador
const inputHeight = document.querySelector('#height');
inputWeight.oninput = () => {
    // oninput serve para acionar um evento durante a alteração no campo
    AlertError.close();
};
inputHeight.oninput = () => {
    AlertError.close();
};
form.onsubmit = function (event) {
    // padrão do submit em um formulário é enviar os dados e recarregar a página
    event.preventDefault(); // para impedir que a pagina carregue ao clicar em submit para subir formulário
    const weight = parseInt(inputWeight.value); // .value é para capturar o valor
    const height = parseInt(inputHeight.value);
    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);
    if (weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }
    AlertError.close();
    const result = calculateIMC(weight, height);
    displayResultMessage(result);
};
function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;
    Modal.message.innerText = message;
    Modal.open(); // a função open sendo executada da criação do objeto Modal
}
