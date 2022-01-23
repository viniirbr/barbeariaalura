const buttonElement = document.querySelector('.main__beneficios-button');
const descriptionElement = document.querySelector('.beneficios__field-description')
const sortDownElement = document.querySelector('.main__beneficios-sortdown')

buttonElement.addEventListener("click", () => {
    descriptionElement.classList.toggle('active');
    console.log(descriptionElement.classList);
})

