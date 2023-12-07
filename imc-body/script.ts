// variáveis - variables

// pegando informações para manipular depois
const form = document.querySelector('form') !; // o ponto de exclamação é para a constante pegar um tipo de dado diferente de null, no caso o const form pegou HTMLFormElement
const inputWeight = document.querySelector('#weight') as HTMLInputElement; // o 'as' funciona parecido com exclamação mas o tipo de dado é definido pelo programador
const inputHeight = document.querySelector('#height') as HTMLInputElement;

const modalWrapper = document.querySelector('.modal-wrapper') as HTMLDivElement
const modalMessage  = document.querySelector('.modal .title span') as HTMLSpanElement
const modalBtnClose = document.querySelector('.modal .close') as HTMLButtonElement

// 3 maneiras de criar e atribuir funções a um evento

// 1

form.onsubmit = function(event) { // padrão do submit em um formulário é enviar os dados e recarregar a página
  
  event.preventDefault(); // para impedir que a pagina carregue ao clicar em submit para subir formulário
  
  
  const weight = parseInt(inputWeight.value)  // .value é para capturar o valor
  const height = parseInt(inputHeight.value)

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  
  modalWrapper.classList.add('open') // adiciona a classe e a estilização feita no open
  modalMessage.innerText = message
  
}

modalBtnClose.onclick = () => {
  modalWrapper.classList.remove('open') // remove a classe e a estilização feito no open
}

function IMC(weight:number, height:number) {
  
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

// 2
// form?.onsubmit = event => {} // se tiver um argumento só vc pode retirar os colchetes

// 3
// form?.onsubmit = handleSubmit
// function handleSubmit() {

// }