export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal .close'),
    open() {
        Modal.wrapper.classList.add('open'); // remove a classe e a estilização feito no open
    },
    close() {
        Modal.wrapper.classList.remove('open'); // remove a classe e a estilização feito no open
    },
};
Modal.buttonClose.onclick = () => {
    Modal.close(); // a função close sendo executada da criação do objeto Modal
};
window.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close();
    }
}
