
// console.log('aqui ')

const reset =  document.getElementById('reset')
const backgroud = document.getElementById('back')
const logout = document.getElementById('logout')
const linkMenu = document.getElementsByClassName('color-user')
const option = document.getElementById('especie')
const input_quantidade = document.getElementById('quantidade')
const logo = document.getElementById('link-logo')
const add = document.getElementById('add')
// const title = document.getElementById('title-h2')
const btnSubmit = document.getElementById('btn-submit')
const divStatus = document.getElementById('div-status');




function perfil(){
    
    const perfil  = localStorage.getItem('perfil')

    switch (perfil){
        
        case 'Castanheira':
            logo.textContent = 'Castanheira'
            console.log('pagina Castanheira')
            backgroud.style.background = 'var(--background-Castanheira)'
            document.body.style.color = 'var(--color-castanha)'
            break

        case 'Peroba-Rosa':
            logo.textContent = 'Peroba-Rosa'
            backgroud.style.background = 'var(--background-Peroba-rosa)'
            document.body.style.color = 'var(--color-peroba-rosa)'
            break
            
        default:
            console.log('pagina Pau-Brasil')
            logo.textContent = 'Pau-Brasil'
            // title.innerText = `OLA ${localStorage.getItem('user')}, SEJA BEM VINDO`
            backgroud.style.background = 'var(--background-PauBrasil)'
            document.body.style.color = 'var(--color-pau-brasil)'
            
    }

}

perfil()

const registerReflorestamento = new Array()

add.addEventListener('click', () => {
    
    if(!(option.value && input_quantidade.value)){
        
        alert('verifique os campos!!')
        
        return
    }
    document.getElementById('table').style.display = 'table'
    
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
    
    createTable()
    
    const objeto = {user: localStorage.getItem('user') , especie: option.value , quantidade: input_quantidade.value }
    
    const stringJson = JSON.stringify(objeto)
   
    registerReflorestamento.push(stringJson)
   
    option.value = ''
    input_quantidade.value = ''
    
});

btnSubmit.addEventListener('submit', (e) => {
    e.preventDefault()

    option.value = ''
    input_quantidade.value = ''

    document.getElementById('table').style.display = 'none'

    divStatus.style.backgroundColor = "green"
    divStatus.innerHTML = `<p>DADOS REGISTRADO REALIZADO COM SUCESSO</p>`


    salvarDados()

})


logout.addEventListener('click', () => {
    
    setTimeout(() => {

        localStorage.clear()

        window.location.href = '/index.html' 

    }, 2000)
    
})


function salvarDados(){
   
    setTimeout(() => {

        window.location.href = '/templates/pages.html' 

    }, 3000)   
    
}





