console.log('welcome')

const firstElement = document.getElementById('first')

const classElement = document.querySelector('.classContent')
classElement.textContent = 'class content'

firstElement.innerHTML = 'Hello World 1'
// firstElement.textContent = 'Hello World 2'
firstElement.style.color = 'red'

const newElement = document.createElement('h1')
newElement.textContent = 'This is a new tag from js'

firstElement.appendChild(newElement)

// ----------------------- For Button -----------------------

const statusContent = document.getElementById('btnstatus')

// // event Listener -> 'click'
const myButton = document.getElementById('mybtn')
myButton.addEventListener('click', function () {
  myButton.textContent = 'Button clicked'
  //   alert('Button clicked')
  statusContent.textContent = 'Button clicked'
})

// ----------------------- For Input -----------------------


// event Listener -> focus & blur
const input = document.getElementById('myinput')
const inputcontent = document.getElementById('inputstatus')

input.addEventListener('focus', function () {
  console.log('input focused')
  input.style.border = '2px solid red'
  inputstatus.textContent = 'Typing Started'
})

input.addEventListener('blur', function () {
  input.style.border = '1px solid red'
  inputstatus.textContent = 'Typing Ended'
})

// ----------------------- For Select -----------------------

// event listener -> change
const select = document.getElementById('myselect')
select.addEventListener('change', function () {
  document.getElementById('selectedvalue').textContent =
    'I selected ' + select.value
})

// ----------------------- For event listener -----------------------

// event listener -> 'mouseover' and 'mouseout'
const myDiv = document.getElementById('mydiv')
myDiv.addEventListener('mouseover', function () {
  myDiv.style.backgroundColor = 'red'
})

myDiv.addEventListener('mouseout', function () {
  myDiv.style.backgroundColor = 'blue'
})

// in yesterday form validation task
// 1. username input box
// 2. password input box
// 3. submit button

// on submit -> if validation fails thorw error message below respective input box
// on error -> change input box border to red and text message color to red also
// 'mouseover' and 'mouseout' in button

// callback function:
// function myFunc() {
//   return myFunc()
// }

// ----------------------- For Array -----------------------


// arrays
const color = ['red', 'blue', 'green', 'yellow']

// 1. array method -> join()
document.getElementById('colorlist').textContent = 'Color: ' + color.join(' - ')

const numbers = [1, 2, 3, 4, 5]
console.log(`Default: ${numbers}`)


// 2. array method -> push (enter new value in array) and pop (takes out last value from array)

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])


numbers.push(6)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.pop()
console.log(numbers)



// 3. array method -> filter() [imp]
const evenNum = numbers.filter((num) => num % 2 === 0)
const oddNum = numbers.filter((num) => num % 2 !== 0)
console.log(`Using filter method (even): ${evenNum}`)
console.log(`Using filter method (odd): ${oddNum}`)



// 4. array method -> map() [imp]
const doubled = numbers.map((num) => num * 2)
console.log(`Using map method (double value): ${doubled}`)
document.getElementById('doubled').textContent =
  'Doubled: ' + doubled.join(' , ')



// 5. array method -> reduce()
//ternary operator: condition ? true_statement : false_statement
const num = [1, 2, 3, 4, 5]
const reducedMethodNum = num.reduce((a, b) => {
  return b > a ? b : a
})
console.log(`Using reduce method (max value): ${reducedMethodNum}`)

// javascript objects ( most-imp ) values are in key-value form
// most of the api response are in object format

num1 = null
num2 = undefined

console.log(typeof num1)
console.log(num1)
console.log(typeof num2)
console.log(num2)

const person = {
  name: 'Sajin Shrestha',
  address: 'Kathmandu',
  age: 21,
  status: true,
  extra: null,
}

console.log(person)
// To see keys of object
console.log(Object.keys(person).join(', '))
// To see values of object
console.log(Object.values(person).join(', '))

// To see key value pair of object
console.log(person.name)

// const total = numbers.reduce(function (accumulator, currentValue) {
//   return currentValue % 2 === 0 ? accumulator + currentValue : accumulator
// }, 0)

// console.log(total)
