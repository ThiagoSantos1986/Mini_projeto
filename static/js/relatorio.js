import { perfil } from './pages.js';
import { listObjeto } from './bd.js';

perfil();


const inputOption = document.getElementById('especie')
const user = document.getElementById('user')
const search = document.getElementById('search')
const table = document.getElementById("table");


search.addEventListener('click', ( ) =>{
    
   

    let result = []
    
    if(!(user.value || inputOption.value)){
        
        alert('Necessario Um dos campos Preenchido')
        
        return
    }
    if((user.value || inputOption.value)){

        result = listObjeto.filter((nome) => nome.user ===  user.value.toUpperCase() || nome.especie === inputOption.value)
    }
    
    if (inputOption.value && user.value){
        
        result = listObjeto.filter((nome) => nome.user ===  user.value.toUpperCase() && nome.especie === inputOption.value)
        
    }
    
    if(result.length == 0){
        alert('NENHUM REGISTRO LOCALIZADO')
        inputOption.value = ''
        user.value = ''
        return
    }
    
    createTable(result)

    inputOption.value = ''
    user.value = ''
    
})




function createTable(result) {
   //aqui no while foi usado IA pra ajudar 
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    table.style.display = 'table';

    for (const element of result) {
        const row = table.insertRow(1);
        const colUser = row.insertCell(0);
        const colEspecie = row.insertCell(1);
        const colQuantidade = row.insertCell(2);
        colUser.innerHTML = element.user;
        colEspecie.innerHTML = element.especie;
        colQuantidade.innerHTML = element.quantidade;
    }
}

