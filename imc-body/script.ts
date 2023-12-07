// variáveis - variables

// pegando informações para manipular depois
const form = document.querySelector('form')!; // o ponto de exclamação é para a constante pegar um tipo de dado diferente de null, no caso o const form pegou HTMLFormElement
const inputWeight = document.querySelector('#weight') as HTMLInputElement; // o 'as' funciona parecido com exclamação mas o tipo de dado é definido pelo programador
const inputHeight = document.querySelector('#height') as HTMLInputElement;

// é constante criada sendo ela um objeto com 5 itens, 2 desses 5 itens são funções (open , close) e essas funções estão apenas registradas sem execução
const Modal = {
    wrapper: document.querySelector('.modal-wrapper') as HTMLDivElement,
    message: document.querySelector('.modal .title span') as HTMLSpanElement,
    buttonClose: document.querySelector('.modal .close') as HTMLButtonElement,

    open() {
        Modal.wrapper.classList.add('open'); // remove a classe e a estilização feito no open
    },
    close() {
        Modal.wrapper.classList.remove('open'); // remove a classe e a estilização feito no open
    },
};

// 3 maneiras de criar e atribuir funções a um evento

// 1

form.onsubmit = function (event) {
    // padrão do submit em um formulário é enviar os dados e recarregar a página

    event.preventDefault(); // para impedir que a pagina carregue ao clicar em submit para subir formulário

    const weight = parseInt(inputWeight.value); // .value é para capturar o valor
    const height = parseInt(inputHeight.value);

    const result = IMC(weight, height);
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open(); // a função open sendo executada da criação do objeto Modal
};

Modal.buttonClose.onclick = () => {
    Modal.close(); // a função close sendo executada da criação do objeto Modal
};

function IMC(weight: number, height: number) {
    return (weight / (height / 100) ** 2).toFixed(2);
}

// 2
// form?.onsubmit = event => {} // se tiver um argumento só vc pode retirar os colchetes

// 3
// form?.onsubmit = handleSubmit
// function handleSubmit() {

// }
