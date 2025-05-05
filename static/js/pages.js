const backgroud = document.getElementById('back')
const logout = document.getElementById('logout')
const logo = document.getElementById('link-logo')
const menuBackground = document.getElementById('menu-content')
const logoPerfil = document.getElementById('span-user')


perfil()

export function perfil(){
    
    const perfil  = localStorage.getItem('perfil')
    
    
    switch (perfil){
        
        case 'Castanheira':
            backgroud.style.backgroundImage = 'var(--background-Castanheira)'
            menuBackground.style.backgroundColor = 'var(--color-castanha )'
            logo.textContent = 'Castanheira'
            break

            case 'Peroba-Rosa':
            backgroud.style.backgroundImage = 'var(--background-Peroba-rosa)'         
            menuBackground.style.backgroundColor = 'var(--color-peroba-rosa )'
            logo.textContent = 'Peroba-Rosa'
            break
            
        default:
            backgroud.style.backgroundImage = 'var(--background-PauBrasil)'
            menuBackground.style.backgroundColor = 'var(--color-pau-brasil)'
            logo.textContent = 'Pau-Brasil'
            
    }
    
}


$(document).ready(()=>{
    
    logoPerfil.innerText = localStorage.getItem('user').toUpperCase()
    $('.nav-toggle').on('click', () =>{
            $('#menu-content ul').slideToggle("medium")
    });
    $(window).on('resize', () => {
        if ($(window).width() > 1050) { 
            $('#menu-content ul').show(); 
        } else {
            $('#menu-content ul').hide(); 
        }
    });
});



logout.addEventListener('click', () => {
    
    setTimeout(() => {

        localStorage.clear()

        window.location.href = '/index.html' 

    }, 1000)
    
})

export { logout};






