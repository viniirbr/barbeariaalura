const tableCell = document.querySelectorAll('.cell')
const calendarInput = document.getElementById('calendarInput')
const agendarButton = document.querySelector('.agendar-button')
const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')


calendarInput.value = moment().format('YYYY-MM-DD')

//variacao de cor da tabela de horarios
function saveTime(cell) {
    cell.addEventListener('click', () => {
        for(i=0; i<tableCell.length; i++) {
            tableCell[i].style.background='white'
        }
        cell.style.background = 'green'
    })
}
tableCell.forEach(saveTime)

agendarButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(timeSelected)
    if ((nameInput.value == '') || (emailInput.value == '') || (timeSelected == false)) {
        if (nameInput.value == '') {
            nameInput.style.borderColor = 'red'
        }
        if (emailInput.value == '') {
            emailInput.style.borderColor = 'red'
        }
        if (timeSelected == false) {
            tableCell.forEach((cell)=> {
                cell.style.borderColor = 'red'
            }) 
        }
    } else {
        const toastPlace = document.querySelector('.toast-place')
        const toastObject = document.createElement("div")
        toastObject.innerHTML = 
            `<div aria-live="polite" aria-atomic="true" id="toast-place">
                <div class="toast" data-delay='3000' style="position: absolute; top: 0; right: 0; margin: 0 auto">
                    <div class="toast-body"> Seu corte foi agendado!</div>
                 </div>
            </div>`
        toastPlace.appendChild(toastObject)
        $('.toast').toast('show')
        nameInput.style.borderColor = 'black'
        emailInput.style.borderColor = 'black'
        tableCell.forEach((cell)=> {
            cell.style.borderColor = 'black'
        })

    }

})



