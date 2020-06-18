const pessoa = [{nome:'Carlos', peso:'84', altura:'1.88', sexo: 'Masculino'}]
const imc = pessoa[0].peso/(pessoa[0].altura*pessoa[0].altura)
if(imc>=30){
  console.log('você está acima do peso');
  math.round
}
else if(imc>0 && imc<30){
  console.log(`você não está abaixo do peso, seu imc é ${ imc }`)
}
