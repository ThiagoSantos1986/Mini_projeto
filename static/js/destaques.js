//pegar os tres primeiros 
//verificar qual o avatar de cada um
//conforme a quantidade de arvores tera um avatar especifico


import { perfil } from './pages.js';
import { listAvatar, listObjeto, listUser } from './bd.js';


perfil()

const listaNomesQuantidadeTotal = []
const nomes = []

const imagesBox = document.getElementsByClassName('img-item')
const nomeDestaque = document.getElementsByClassName('nome-destaque')

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

