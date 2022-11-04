

// let nome = "Renato Alencar Areval"
// localStorage.setItem("nome",nome)
// console.log(localStorage.getItem("nome"))


// const tarefas = [
//     {id:1,descricao:"Pagar conta de energia"},
//     {id:2,descricao:"Estudar para prova"},
//     {id:3,descricao:"Pagar conta de agua"},
// ]

// localStorage.setItem("tarefas", JSON.stringify(tarefas))

// const listaTarefas =JSON.parse(localStorage.getItem("tarefas"))

// console.log(typeof(listaTarefas))

// console.log(listaTarefas[0].descricao)



const inputTarefa = document.querySelector('#tarefa')
const form = document.querySelector('#form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    console.log(inputTarefa.value)
})

const botaoImprimir = document.querySelector('#imprimir')
botaoImprimir.addEventListener('click', function(){
    console.log('clicou no botão')
})

const result = document.querySelector('#result')

const setResultToTable = () =>{
    
    result.innerHTML = ''

    listaTarefas.forEach(tarefa => {
        const linha = document.createElement('tr')

        const colunaDescricao = document.createElement('td')
        colunaDescricao.innerHTML = tarefa.descricao 

        const colunaData = document.createElement('td')
        colunaData.innerHTML = tarefa.descricao 
    })
}