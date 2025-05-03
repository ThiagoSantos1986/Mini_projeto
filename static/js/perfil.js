import { perfil } from './pages.js';


perfil()
const bioEdit = document.getElementById('bio-edit')
const btnSalvar = document.getElementById('btn-salvar')
const btnEdit = document.getElementById('btn-edit')


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





