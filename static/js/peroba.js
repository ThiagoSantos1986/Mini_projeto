
// console.log('aqui ')

const reset =  document.getElementById('reset')
const backgroud = document.getElementById('back')

function perfil(){
    
    const perfil  = localStorage.getItem('perfil')
    console.log(localStorage.getItem('user'))


    switch (perfil){
        
        case 'Castanheira':
            console.log('pagina Castanheira')
            backgroud.style.background = 'var(--background-Castanheira)'
            break

        case 'Peroba-Rosa':
            console.log('pagina peroba')
            backgroud.style.background = 'var(--background-Peroba-rosa)'
            break
            
        default:

            console.log('pagina Pau-Brasil')
            backgroud.style.background = 'var(--background-PauBrasil)'
            break
    }

}

perfil()

// reset.addEventListener('click', () => {
    
//     setTimeout(() => {

//         localStorage.clear()

//         window.location.href = '/index.html' 

//     }, 2000)
    

// })








