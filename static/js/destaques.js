//pegar os tres primeiros 
//verificar qual o avatar de cada um
//conforme a quantidade de arvores tera um avatar especifico


import { perfil } from './pages.js';

perfil()






















const listObjeto = [

    {user: 'PEDRO', especie: 'Ipês', quantidade: 10 },
    {user: 'ANA', especie: 'Angicos', quantidade: 3 },
    {user: 'ANA', especie: 'Peroba do Campo', quantidade: 7 },
    {user: 'THIAGO', especie: 'Ipês', quantidade: 5 },
    {user: 'THIAGO', especie: 'Angicos', quantidade: 7 },
    {user: 'ANA', especie: 'Jequitibás', quantidade: 6 },
    {user: 'ANA', especie: 'Ipês', quantidade: 6 },
    {user: 'THIAGO', especie: 'Peroba do Campo', quantidade: 20 },
    {user: 'RAFAEL', especie: 'Ipês', quantidade: 10 },
    {user: 'RAFAEL', especie: 'Angicos', quantidade: 50 },
    {user: 'PEDRO', especie: 'Angicos', quantidade: 42 },
    {user: 'PEDRO', especie: 'Aroeiras', quantidade: 60 },
    {user: 'PEDRO', especie: 'Peroba do Campo', quantidade: 20 },
    {user: 'ANA', especie: 'Aroeiras', quantidade: 41 },
    {user: 'THIAGO', especie: 'Jequitibás', quantidade: 11 },
    {user: 'RAFAEL', especie: 'Peroba do Campo', quantidade: 3 },
    {user: 'THIAGO', especie: 'Aroeiras', quantidade: 9 },
    {user: 'PEDRO', especie: 'Jequitibás', quantidade: 15 },
    {user: 'RAFAEL', especie: 'Aroeiras', quantidade: 30 },
    {user: 'RAFAEL', especie: 'Jequitibás', quantidade: 10 },
]


const result = listObjeto.filter((nome) => nome.quantidade > 50)
// console.log(result)




const listaOrdenada = listObjeto.sort((a, b ) =>  b.quantidade - a.quantidade  )

console.log(listaOrdenada)