const students = [
  {
    name: 'Myke',
    grade: 9.8
  },
  {
    name: 'Diego',
    grade: 10
  },
  {
    name: 'Léo',
    grade: 7
  }
]
let getSum = 0

for (let i = 0; i < students.length; i++) {
  getSum = getSum + students[i].grade
  // return getSum não é usado pois quebra o loop
}

const avarage = getSum / students.length

if(avarage>=5 && avarage<=10){
  console.log(`parabés, vocês passaram. Sua nota é ${avarage}`)
}
else if(avarage<5 && avarage>=0){
  console.log('infelizmente sua nota é insuficiente para passar!')
}
else{
  console.log('por favor, cheque seus valores')
}
