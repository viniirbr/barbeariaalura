const buttonElement = document.querySelectorAll('.main__beneficios-button')
const descriptionElement = document.querySelector('.beneficios__field-description')
const sortDownElement = document.querySelector('.main__beneficios-sortdown')


function displayText(element, index, array) {
    element.addEventListener('click', () => {
        element.nextElementSibling.classList.toggle('active')
    })
}

buttonElement.forEach(displayText)

