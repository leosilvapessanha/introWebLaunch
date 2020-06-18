const pessoa = [{nome:'Silvana', contribuicao:23, idade:48, sexo: 'F'}]
const regra = pessoa[0].contribuicao+pessoa[0].idade
if(pessoa[0].sexo === 'F' && regra>=85){
  console.log(`${ pessoa[0].nome }, você já pode se aposentar`);
}
else {
  console.log(`${ pessoa[0].nome }, você não pode se aposentar`)
}

