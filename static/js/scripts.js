

const input_user = document.getElementById('user')


document.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const selectedRadio = document.querySelector("input[name='perfil']:checked").value
    
    const input_senha = document.getElementById('password').value
    const input_checkbox = document.getElementById('checkbox')
    const isChecked = input_checkbox.checked

    const loginUser = {user: input_user.value, pass: input_senha, perfil: selectedRadio}
    
    // const stringJson = JSON.stringify(loginUser)// string pronta pra salvar no banco de dados
    
    if (isChecked) {

        if(!localStorage.getItem('user')){
            
            for (const key in loginUser) { // for para salvar par de chave e valor no local Storage

                localStorage.setItem(key, loginUser[key]);
            }
        }
    }
    
        
    setTimeout(()=> {
        
        window.location.href = '/templates/pages.html' 

    }, 2000)
            
 
})



function set_perfil(loginUser){



    switch (localStorage.getItem('perfil') || loginUser['perfil']){

        case 'Pau-Brasil':
            console.log('pagina Pau-Brasil')
            window.location.href = '/templates/peroba-rosa.html'
            break

        case 'Castanheira':
            console.log('pagina Castanheira')
            window.location.href = '/templates/peroba-rosa.html'

            break
        case 'Peroba-Rosa':
            console.log('pagina peroba')
            // perfil()
            window.location.href = '/templates/peroba-rosa.html'
            break
    }

}   


window.onload = function() {
    
    if(localStorage.user){
        console.log("aqui")
        const user = localStorage.getItem('user')
        setTimeout(()=>{
            input_user.value = user
        }, 2000)
        return
    }
    return
  };
        
