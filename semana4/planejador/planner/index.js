function addTask(){
    // Pegando o valor do inputs <<<<<<< há mudanças no container do html, criação de id.

    const input = document.getElementById('tarefa')
    const inputValue = input.value
    console.log('Valor input', inputValue)

    // Pegando o valor do select inputs <<<<<<<
    const select = document.getElementById('dias-semana')
    const selectValue = select.value
    console.log('Valor select', selectValue)

    const div = document.getElementById(selectValue)
    div.innerHTML += `<p class='task-item'>${inputValue}</p>`
}

    // Riscando Tarefas <<<<<<< há mudanças também no html e css, criação de um id na section e também chamando esse id no css. 

const taskContainer = document.getElementById('task-container') //pegando a section taskContainer
taskContainer.addEventListener('click', riskItem)

function riskItem(e){ //deve chamar essa function riskItmem no css para que funcione.
    console.log(e.target)
    if(e.target.classList.contains('task-item')){
        e.target.classList.toggle('risked-item')
    }
}