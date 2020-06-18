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
    name: 'João',
    grade: 3
  },
  {
    name: 'Miguel',
    grade: 4
  },
  {
    name: 'Leandro',
    grade: 5
  }
]

function markStudents(students){
    if(true){
      students.failed = false
    }
    if(students.grade<5){
      students.failed = true
    }
}


function mesage(students){
  if(students.failed) {
    console.log(`desculpe, ${ students.name }. você não atingiu a média`)
  }
}

function studentFailed(students){
  for (let student of students){
    markStudents(student)
    mesage(student)
  }
}

studentFailed(studentsB)



