const studentsA = [
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

const studentsB = [
  {
    name: 'Myke',
    grade: 3
  },
  {
    name: 'Diego',
    grade: 4
  },
  {
    name: 'Léo',
    grade: 5
  }
]

function soma(students) {
  let getSum = 0

  for (let i = 0; i < students.length; i++) {
    getSum = getSum + students[i].grade
    // return getSum não é usado pois quebra o loop
  }
  const avarage = getSum / students.length

  return avarage
}

function report(avarage, turma) {
  if (avarage >= 5 && avarage <= 10) {
    console.log(`Parabés, turma ${ turma } vocês passaram. Sua nota é ${avarage}`)
  }
  else if (avarage < 5 && avarage >= 0) {
    console.log(`infelizmente sua nota é insuficiente para passar, turma ${ turma }`)
  }
  else {
    console.log('Por favor, cheque seus valores')
  }
}

const avarage1 = soma(studentsA)

const avarage2 = soma(studentsB)

report(avarage1, 'A')

report(avarage2, 'B')

