const tableCell = document.querySelectorAll('.cell')
const calendarInput = document.getElementById('calendarInput')
const agendarButton = document.querySelector('.agendar-button')

calendarInput.value = moment().format('YYYY-MM-DD')
function saveTime(cell) {
    cell.addEventListener('click', () => {
        for(i=0; i<tableCell.length; i++) {
            tableCell[i].style.background='white'
        }
        cell.style.background = 'red'
    })
}
tableCell.forEach(saveTime)

agendarButton.addEventListener('click', () => {
    $('.toast').toast('show')
})

