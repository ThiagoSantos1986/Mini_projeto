

const input_user = document.getElementById('user')

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const selectedRadio = document.querySelector("input[name='perfil']:checked").value
    
    const input_senha = document.getElementById('password').value
    const input_checkbox = document.getElementById('checkbox')
    const isChecked = input_checkbox.checked

    const loginUser = {user: input_user.value, pass: input_senha, perfil: selectedRadio}
    
    const stringJson = JSON.stringify(loginUser)// string pronta pra salvar no banco de dados
    
    if (isChecked) {

        if(!localStorage.getItem('user')){
            
            for (const key in loginUser) { // for para salvar par de chave e valor no local Storage

                localStorage.setItem(key, loginUser[key]);
            }
        }
    }
    
    get_perfil(loginUser)
 
})

// const myttimeout = setTimeout(setUser, 1000)

// function setUser(){
//     if(localStorage.getItem('user')){
//         console.log("aqui")
//         const user = localStorage.getItem('user')
//         input_user.value = user

//     }
// }
import { perfil } from "./peroba.js"

function get_perfil(loginUser){

    switch (localStorage.getItem('perfil') || loginUser['perfil']){

        case 'Pau-Brasil':
            console.log('pagina Pau-Brasil')

            break

        case 'Castanheira':
            console.log('pagina Castanheira')

            break
        case 'Peroba-Rosa':
            console.log('pagina peroba')
            
            window.location.href = '/templates/peroba-rosa.html'


            break
    }

}   
        
        

        
        
        
    //     const user = localStorage.getItem('user')
        
    //     let texto = document.getElementById('welcome')
        
    //     texto.style.color = '#b3cc57'
    //     texto.innerText = texto.textContent + user

    //     input_user.value = user

    // }





// clearTimeout(myttimeout)