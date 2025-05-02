import { perfil } from './pages.js'

perfil()


const option = document.getElementById('especie')
const input_quantidade = document.getElementById('quantidade')
const btnSubmit = document.getElementById('btn-submit')

const registerReflorestamento = new Array()

add.addEventListener('click', () => {
    
    if(!(option.value && input_quantidade.value)){
        
        alert('verifique os campos!!')
        
        return
    }
    document.getElementById('table').style.display = 'table'
    
    
    createTable()
    
    const objeto = {user: localStorage.getItem('user') , especie: option.value , quantidade: input_quantidade.value }
    console.log(objeto)
    const stringJson = JSON.stringify(objeto)
   
    registerReflorestamento.push(stringJson)
   
    option.value = ''
    input_quantidade.value = ''
    
});
function createTable() {
        
    const table = document.getElementById("table");
    const row = table.insertRow(1);
    const user = row.insertCell(0);
    const especie = row.insertCell(1);
    const quantidade = row.insertCell(2);
    user.innerHTML = localStorage.getItem('user')
    especie.innerHTML = option.value
    quantidade.innerHTML = input_quantidade.value
}

btnSubmit.addEventListener('submit', (e)=>{
    
    e.preventDefault()

    option.value = ''
    input_quantidade.value = ''

    document.getElementById('table').style.display = 'none'


})


