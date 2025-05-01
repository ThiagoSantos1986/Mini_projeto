import { perfil } from './pages.js';

perfil();


const inputOption = document.getElementById('especie')
const user = document.getElementById('user')
const search = document.getElementById('search')


search.addEventListener('click', ( ) =>{
    console.log(user.value)
    console.log(inputOption.value)

    const result = listObjeto.filter((nome) => nome.user ===  user.value.toUpperCase() ||  nome.especie === inputOption.value)
    
    if(result.length == 0){
        console.log("aqui")
    }

    console.log(result)
})




function createTable() {
        
    const table = document.getElementById("table");
    // const row = table.insertRow(1);
    // const colUser = row.insertCell(0);
    // const colEspecie = row.insertCell(1);
    // const colQuantidade = row.insertCell(2);
    
    const result = listObjeto.filter((nome) => nome.user ===  'ANA' ||  nome.especie === 'Ipês')

    
    for (const element of result) {
        const row = table.insertRow(1);
        const colUser = row.insertCell(0);
        const colEspecie = row.insertCell(1);
        const colQuantidade = row.insertCell(2);
    
        colUser.innerHTML = element.user
        colEspecie.innerHTML = element.especie
        colQuantidade.innerHTML = element.quantidade
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
