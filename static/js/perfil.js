import { perfil } from './pages.js';
import { listAvatar, listObjeto, listUser } from './bd.js';

perfil()
const bioEdit = document.getElementById('bio-edit')
const btnSalvar = document.getElementById('btn-salvar')
const btnEdit = document.getElementById('btn-edit')
const imagePerfil = document.getElementById('perfil')
const nomePerfil = document.getElementById('nome-perfil')
const quantidade = document.getElementById('quantidade')


// const listaNomesQuantidadeTotal = []
// const nomes = []


btnEdit.addEventListener('click', () => {
    bioEdit.style.border  = "2px solid green"
    bioEdit.disabled = false
    btnSalvar.disabled = false
    
    bioEdit.innerText =  bioEdit.value

    
});

// Adiciona um evento ao botão "SALVAR"
btnSalvar.addEventListener('click', () => {
    
    const bioText = bioEdit.value; 
    bioEdit.style.border = '1px dashed black'
    
    bioEdit.innerText = bioText
    
    alert(`Bio salva` );
    bioEdit.disabled = true
    
    setTimeout(()=>{
        btnSalvar.disabled = true
    }, 2000)

});


let destaques;

let nomeUser = localStorage.getItem('user').toUpperCase().split(' ')[0]
console.log(nomeUser)

//traz a lista pelo nome com todas as quantidades plantadas
destaques = listObjeto.filter((user) => user.user  === nomeUser )
console.log(destaques)

//aqui percorre a lista e soma a quantidade
let quantidadeTotal  = destaques.reduce((total, numero ) => total  + numero.quantidade, 0) 


quantidade.innerText = quantidadeTotal


// FAZ UM FILTRO BUSCANDO O NOME COMPLETO NO OBEJETO LISTUSER
const result = listUser.filter((nome) => nome.user.split(' ')[0] === nomeUser)
    
    for (const element of result) {
        
        const nomeCompleto = element.user
       
        nomePerfil.innerText = nomeCompleto   
    }
    




let total = quantidadeTotal
    
if(total > 1500){

    let result = listAvatar.filter((nome) => nome.avatar === "madura")
    
    imagePerfil.setAttribute('src', result[0].path )
}else if (total < 1500 && total > 700){

    let result = listAvatar.filter((nome) => nome.avatar === "jovem")
    imagePerfil.setAttribute('src', result[0].path )

}else if (total <= 700 && total > 300){

    let result = listAvatar.filter((nome) => nome.avatar === "broto")
    imagePerfil.setAttribute('src', result[0].path )
    // document.getElementById('avatar').innerText = result[0].avatar

}else{

    let result = listAvatar.filter((nome) => nome.avatar === "plantada")
    imagePerfil.setAttribute('src', result[0].path )
    // document.getElementById('avatar').textContent = result[0].avatar  //se quiser colocar qual avatar esta.
}