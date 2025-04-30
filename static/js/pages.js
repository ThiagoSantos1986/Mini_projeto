const backgroud = document.getElementById('back')
const logout = document.getElementById('logout')
const logo = document.getElementById('link-logo')
const add = document.getElementById('add')

perfil()

export function perfil(){
    
    const perfil  = localStorage.getItem('perfil')

    switch (perfil){
        
        case 'Castanheira':
            backgroud.style.backgroundImage = 'var(--background-Castanheira)'
            document.body.style.color = 'var(--color-castanha)'
            logo.textContent = 'Castanheira'
            console.log('pagina Castanheira')
            break

        case 'Peroba-Rosa':
            backgroud.style.backgroundImage = 'var(--background-Peroba-rosa)'
            document.body.style.color = 'var(--color-peroba-rosa)'
            logo.textContent = 'Peroba-Rosa'
            break
            
        default:
            backgroud.style.backgroundImage = 'var(--background-PauBrasil)'
            document.body.style.color = 'var(--color-pau-brasil)'
            logo.textContent = 'Pau-Brasil'
            // title.innerText = `OLA ${localStorage.getItem('user')}, SEJA BEM VINDO`
            console.log('pagina Pau-Brasil')
            
    }

}



logout.addEventListener('click', () => {
    
    setTimeout(() => {

        localStorage.clear()

        window.location.href = '/index.html' 

    }, 1000)
    
})

export { logout};






