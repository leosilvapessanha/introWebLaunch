const people= [
  {name: 'diego', 
  age:17},
  {name:'léo', 
  age:29}]

for(let i = 0, i<people.lenght; i++){
  if(people[i].age>=18 &&people[i].age>0){
    console.log(`${people[i].age}>que 18, você é de maior`)
  }
  else if(people[i].age === 17){
    console.log(`${people[i].name} volte quando tiver 18`)
  }
}