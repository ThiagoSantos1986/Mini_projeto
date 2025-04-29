
// console.log('aqui ')

const reset =  document.getElementById('reset')
const backgroud = document.getElementById('back')
const logout = document.getElementById('logout')
const linkMenu = document.getElementsByClassName('color-user')



function perfil(){
    
    const perfil  = localStorage.getItem('perfil')
    console.log(localStorage.getItem('user'))


    switch (perfil){
        
        case 'Castanheira':
            console.log('pagina Castanheira')
            backgroud.style.background = 'var(--background-Castanheira)'
            document.body.style.color = 'var(--color-castanha)'
            break

        case 'Peroba-Rosa':
            console.log('pagina peroba')
            backgroud.style.background = 'var(--background-Peroba-rosa)'
            document.body.style.color = 'var(--color-peroba-rosa)'
            break
            
        default:
            console.log('pagina Pau-Brasil')
            backgroud.style.background = 'var(--background-PauBrasil)'
            document.body.style.color = 'var(--color-pau-brasil)'
            
    }

}

perfil()

logout.addEventListener('click', () => {
    
    setTimeout(() => {

        localStorage.clear()

        window.location.href = '/index.html' 

    }, 2000)
    
})








