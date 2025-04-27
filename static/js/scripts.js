
// console.log(selectedRadio) // Valor do input selecionado


console.log("bem vindo")

document.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const selectedRadio = document.querySelector("input[name='perfil']:checked").value
    localStorage.setItem("perfil", selectedRadio);
    
    let perfil = localStorage.getItem("perfil");
    console.log(perfil)

})

