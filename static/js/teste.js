//salva no banco em json o objeto


const loginUser = {user: 'input_email', pass: 'input_senha', perfil: 'selectedRadio '}

const stringJson = JSON.stringify(loginUser)

const newObjeto = JSON.parse(stringJson)

console.log(typeof(newObjeto))


// const objeto = JSON.parse(loginUser)

for (const key in newObjeto) {

    if (Object.prototype.hasOwnProperty.call(newObjeto, key)) {
        const element = newObjeto['perfil'];

        console.log(element)
    }
}

// const { text } = require('stream/consumers');


// export function salvar(texto){
    

//     const fs = require('fs')

//     // Data which will be appended to the file.
//     let newData = `\n\n ${texto}` 

//     // Append data to 'Hello.txt' .
    
//     fs.appendFile('Hello.txt', newData, (err) => {

//         // In case of a error throw err.
//         if (err) throw err;
//     })

    
// }

// salvar(stringJson)

// Requiring fs module in which
// writeFile function is defined.
// const fs = require('fs')

// // Data which will write in a file.
// let data = "Learning how to write in a file."

// // Write data in 'Output.txt' .
// fs.writeFile('Output.txt', 'data', (err) => {

//     // In case of a error throw err.
//     if (err) throw err;
// })


// Requiring fs module in which
// writeFile function is defined.

let soma = (a,b) => a + b;

soma(2,3)