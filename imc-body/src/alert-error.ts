export const AlertError = {
    element: document.querySelector('.alert-error') as HTMLDivElement,
    open() {
        AlertError.element.classList.add('open');
    },
    close() {
        AlertError.element.classList.remove('open');
    },
};
