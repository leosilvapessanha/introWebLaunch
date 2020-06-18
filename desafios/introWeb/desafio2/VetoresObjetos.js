const usuario = {
  nome: "Carlos",
  idade:32,
  especialidades: { nome: 'C++', local: 'Desktop' }

};
console.log(`${ usuario.nome } tem ${ usuario.idade } anos e usa a tecnologia ${ usuario.especialidades.nome } em ${ usuario.especialidades.local }`)