//pegar os tres primeiros 
//verificar qual o avatar de cada um
//conforme a quantidade de arvores tera um avatar especifico


import { perfil } from './pages.js';
import { listAvatar } from './perfil.js';


perfil()

const listaNomesQuantidadeTotal = []
const nomes = []

const imagesBox = document.getElementsByClassName('img-item')
const nomeDestaque = document.getElementsByClassName('nome-destaque')


const listObjeto = [

    {user: 'PEDRO', especie: 'Ipês', quantidade: 1 },
    {user: 'ANA', especie: 'Angicos', quantidade: 300 },
    {user: 'ANA', especie: 'Peroba do Campo', quantidade: 700 },
    {user: 'THIAGO', especie: 'Ipês', quantidade: 50 },
    {user: 'THIAGO', especie: 'Angicos', quantidade: 70 },
    {user: 'ANA', especie: 'Jequitibás', quantidade: 60 },
    {user: 'ANA', especie: 'Ipês', quantidade: 600 },
    {user: 'THIAGO', especie: 'Peroba do Campo', quantidade: 20 },
    {user: 'RAFAEL', especie: 'Ipês', quantidade: 100 },
    {user: 'RAFAEL', especie: 'Angicos', quantidade: 50 },
    {user: 'PEDRO', especie: 'Angicos', quantidade: 42 },
    {user: 'PEDRO', especie: 'Aroeiras', quantidade: 60 },
    {user: 'PEDRO', especie: 'Peroba do Campo', quantidade: 20 },
    {user: 'ANA', especie: 'Aroeiras', quantidade: 410 },
    {user: 'THIAGO', especie: 'Jequitibás', quantidade: 10 },
    {user: 'RAFAEL', especie: 'Peroba do Campo', quantidade: 300 },
    {user: 'THIAGO', especie: 'Aroeiras', quantidade: 90 },
    {user: 'PEDRO', especie: 'Jequitibás', quantidade: 15 },
    {user: 'RAFAEL', especie: 'Aroeiras', quantidade: 300 },
    {user: 'RAFAEL', especie: 'Jequitibás', quantidade: 10 },
]


const listUser = [
    {user: 'RAFAEL DE OLIVEIRA', idade: 12 ,'Bio': 'Reflorestamento e restauração de áreas degradadas. 🌳🌿 Contribuo para um mundo mais verde'},
    {user: 'THIAGO SANTOS', idade: 39, 'Bio': 'Apaixonado pela natureza e pelo reflorestamento. Plantar árvores e restaurar o meio ambiente é o meu objetivo. 💚'},
    {user: 'ANA BEATRIZ ', idade: 15 ,'Bio': 'Reflorestador e defensor da natureza. Plantando sementes de mudança para um futuro mais sustentável. 🌱'},
    {user: 'SUELLEN NEVES ', idade: 28 ,'Bio': 'Profissional de reflorestamento com expertise em restauração ecológica. 🌱🌳 Contribuindo para projetos de conservação ambiental.'},
    {user: 'PEDRO DOS SANTOS', idade: 51 ,'Bio': 'Reflorestador e entusiasta da natureza, baseado em Boehmerwald, Joinville. 🌿🌳 Dedicado à restauração de áreas verdes e à conservação da biodiversidade'},
    {user: 'JOAO DOS SANTOS', idade: 45 ,'Bio': 'Dedico-me a plantar árvores e contribuir para um futuro mais verde. 💚'}
]


//cria uma lista sem nomes repetidos
for (const element of listObjeto) {

    nomes.push(element.user)
    
}


const nomeUnicos = new Set(nomes)

let destaques;

for (const element of nomeUnicos) {

    //traz a lista pelo nome com todas as quantidades plantadas
    destaques = listObjeto.filter((user) => user.user  == element)
    
    //aqui percorre a lista e soma a quantidade
    destaques  = destaques.reduce((total, numero ) => total  + numero.quantidade, 0) 

    //adciona user e quantidade total no novo objeto 
    listaNomesQuantidadeTotal.push({user: element, total: destaques})
}

//lista com nomes unicos e ordenada pela quantidade.
listaNomesQuantidadeTotal.sort((a, b ) =>  b.total - a.total)

//IMPRIMINDO NO CONSOLE A LISTA DOS DESTAQUES 
console.log(listaNomesQuantidadeTotal)


//for para pegar somente os tres primeiros e setar no front-end
for(let i = 0 ; i <= nomeDestaque.length -1 ; i++){

    // FAZ UM FILTRO BUSCANDO O NOME COMPLETO NO OBEJETO LISTUSER
    const result = listUser.filter((nome) => nome.user.split(' ')[0] === listaNomesQuantidadeTotal[i].user)
    
    for (const element of result) {
        
        const nomeCompleto = element.user
       
        nomeDestaque[i].textContent = nomeCompleto   
    }
    let total = listaNomesQuantidadeTotal[i].total
    
    if(total > 1500){

        let result = listAvatar.filter((nome) => nome.avatar === "madura")
        
        imagesBox[i].setAttribute('src', result[0].path )
    }else if (total < 1500 && total > 700){
    
        let result = listAvatar.filter((nome) => nome.avatar === "jovem")
        imagesBox[i].setAttribute('src', result[0].path )

    }else if (total <= 700 && total > 300){
    
        let result = listAvatar.filter((nome) => nome.avatar === "broto")
        imagesBox[i].setAttribute('src', result[0].path )

    }else{

        let result = listAvatar.filter((nome) => nome.avatar === "plantada")
        imagesBox[i].setAttribute('src', result[0].path )
    }
}

//aqui percorre e busca pela quantidade  de arvores plantadas  depois busca no objeto 
// importado o endereco da imagem e conforme a valor total ele insere a imagem correspondente (madura, jovem, broto, plantada)
for(let i = 0 ; i<= 2; i++){

    let total = listaNomesQuantidadeTotal[i].total
    
    if(total > 1500){

        let result = listAvatar.filter((nome) => nome.avatar === "madura")
        
        imagesBox[i].setAttribute('src', result[0].path )
    }else if (total < 1500 && total > 700){
    
        let result = listAvatar.filter((nome) => nome.avatar === "jovem")
        imagesBox[i].setAttribute('src', result[0].path )

    }else if (total <= 700 && total > 300){
    
        let result = listAvatar.filter((nome) => nome.avatar === "broto")
        imagesBox[i].setAttribute('src', result[0].path )
        document.getElementById('avatar').innerText = result[0].avatar

    }else{

        let result = listAvatar.filter((nome) => nome.avatar === "plantada")
        imagesBox[i].setAttribute('src', result[0].path )
        // document.getElementById('avatar').textContent = result[0].avatar  //se quiser colocar qual avatar esta.
    }
}

