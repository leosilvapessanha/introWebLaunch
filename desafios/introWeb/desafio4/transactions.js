const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
}


function createTransaction(transaction) {
  user.transactions.push(transaction)

  if (transaction.type === 'credit') {
      user.balance = user.balance + transaction.value
  } else {
      user.balance = user.balance - transaction.value
  }
}

function getHigherTransactionByType(type){
let highertransaction
let highervalue = 0

for(transaction of user.transactions){
  if(transaction.type == type &&transaction.value > highervalue){
    highervalue=transaction.value
    highertransaction= transaction
  }
}
return highertransaction
}

function getAverageTransactionValue(){
  let somatory=0
  for(transaction of user.transactions){
    somatory= somatory+transaction.value      
    }
  const average = somatory/user.transactions.length
  return average
}

function getTransactionsCount() {
  let counter = {
    credit : 0,
    debit : 0
  }

  for(transaction of user.transactions){
    if(transaction.type === 'credit'){
      counter.credit=counter.credit+1
    }
    else{
      counter.debit=counter.debit+1
    }
    
  }
  return counter
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }
