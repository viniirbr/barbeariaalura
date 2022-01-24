const buttonElement = document.querySelectorAll('.main__beneficios-button')

function displayText(button) {
    button.addEventListener('click', () => {
        const descriptionClass = button.nextElementSibling.classList
        const sortDownIcon = button.children[1]
        sortDownIcon.style.transition = "all 0.3s"
        descriptionClass.toggle('active')
        if (descriptionClass.contains('active')) {
            sortDownIcon.style.transform = "rotate(180deg)"
        } else {
            sortDownIcon.style.transform = "rotate(0)"
        }

    })
}

buttonElement.forEach(displayText)

