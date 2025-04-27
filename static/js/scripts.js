

// let perfil = localStorage.getItem("perfil");
//     console.log(perfil)


document.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const selectedRadio = document.querySelector("input[name='perfil']:checked").value
    
    salvar_perfil(selectedRadio)
    
})


function salvar_perfil(perfil){
    localStorage.setItem("perfil", perfil);
}


function get_perfil(){
    
    const perfil = localStorage.getItem('perfil') || "nao selecionado"
    
    
    switch (perfil){

        case 'Castanheira':
            window.location.href  = '/templates/castanha.html'
            break
        default:
            console.log('sem pagina ')
            break
        
    }
    

}

function logout(){
    localStorage.clear()
}

get_perfil()