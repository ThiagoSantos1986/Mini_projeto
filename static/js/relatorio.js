import { perfil } from './pages.js';

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



const listObjeto = [

    {user: 'PEDRO', especie: 'Ipês', quantidade: 5 },
    {user: 'ANA', especie: 'Angicos', quantidade: 5 },
    {user: 'ANA', especie: 'Peroba do Campo', quantidade: 5 },
    {user: 'THIAGO', especie: 'Ipês', quantidade: 5 },
    {user: 'THIAGO', especie: 'Angicos', quantidade: 5 },
    {user: 'ANA', especie: 'Jequitibás', quantidade: 5 },
    {user: 'ANA', especie: 'Ipês', quantidade: 5 },
    {user: 'THIAGO', especie: 'Peroba do Campo', quantidade: 5 },
    {user: 'RAFAEL', especie: 'Ipês', quantidade: 5 },
    {user: 'RAFAEL', especie: 'Angicos', quantidade: 5 },
    {user: 'PEDRO', especie: 'Angicos', quantidade: 5 },
    {user: 'PEDRO', especie: 'Aroeiras', quantidade: 5 },
    {user: 'PEDRO', especie: 'Peroba do Campo', quantidade: 5 },
    {user: 'ANA', especie: 'Aroeiras', quantidade: 5 },
    {user: 'THIAGO', especie: 'Jequitibás', quantidade: 5 },
    {user: 'RAFAEL', especie: 'Peroba do Campo', quantidade: 5 },
    {user: 'THIAGO', especie: 'Aroeiras', quantidade: 5 },
    {user: 'PEDRO', especie: 'Jequitibás', quantidade: 5 },
    {user: 'RAFAEL', especie: 'Aroeiras', quantidade: 5 },
    {user: 'RAFAEL', especie: 'Jequitibás', quantidade: 5 },
]

// createTable()
