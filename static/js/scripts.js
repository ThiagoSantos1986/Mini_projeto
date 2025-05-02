

const input_user = document.getElementById('user')
const input_checkbox =  document.getElementById('checkbox')
input_checkbox.checked  = true
const isChecked = input_checkbox.checked 



document.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const selectedRadio = document.querySelector("input[name='perfil']:checked").value
    
    const input_senha = document.getElementById('password').value
    

    const loginUser = {user: input_user.value, pass: input_senha, perfil: selectedRadio}
    
    const stringJson = JSON.stringify(loginUser) // string pronta pra salvar no banco de dados
    
    if (isChecked) {

        if(!localStorage.getItem('user')){
            
            for (const key in loginUser) { // for para salvar par de chave e valor no local Storage

                localStorage.setItem(key, loginUser[key]);
            }
            setLogin(stringJson)

        }
        else{
            
            const validPass = localStorage.getItem('pass')

            if(validatePass(input_senha, validPass)){
                
                setLogin()

            }else{

                alert('senha informada invalida!!')
            }
                
        }
    }
    

})


function setLogin(user){

    console.info(user, "Usuario salvo no banco de Dados")

    setTimeout(()=> {
        
        window.location.href = '/templates/pages.html' 

    }, 2000)
}


function validatePass(senhaDigitada, senhaBD){
    
    return  senhaDigitada === senhaBD ? true : false
         
}


window.onload = function() {
    

    if(localStorage.user){
        
        const user = localStorage.getItem('user')
        setTimeout(()=>{
            input_user.value = user
        }, 2000)
        return
    }
    return
  };
        
