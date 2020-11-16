const fruits = ["banana", "orange", "apple"];

console.log(fruits[2])

const bananaIndex = fruits.indexOf('banana')
console.log('bananaIndex: ${bananaIndex}'),
fruits[bananaIndex]

console.log(fruits.length) //how many number of items 


// remove item 
const removedItem = fruits.pop() // removes last element 
console.log('after pop', fruits.length, fruits, removedItem)


//how do we add an item? 
fruits.push('kiwi')
console.log('after push', fruits.length, fruits)
fruits.unshift('strawberry')
console.log('after unshift', fruits.length, fruits)

fruits.reverse()
console.log('after reverse', fruits)
fruits.sort()
console.log('after sort', fruits)

console.log(fruits.join(' and '))