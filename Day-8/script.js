//Yesterday 
// 1. JavaScript Object
// 2. JSON
// 3. Callback Function

// 1. Objects
const user = {
    name: 'Roman Shrestha',
    age: 19,
    status: true,
    extradata: null,
    hobies: ['reading', 'writing'],
    say: function(){
        //keys haru directly access garna mildaina so we use this. function
        return `I'am ${this.name}` 
    }
}

// document.getElementById('profile').innerText = `Name: ${user.name} and Hobies: ${user.hobies.join(', ')}`;


function showgreetings(){
    alert(user.say())
}
console.log(user)

// 2. JSON
const jsonstring = `{"username": "Roman SHrestha", "age": "19"}`
const users = {
    name: 'Roman Shrestha',
    age: 19,
    status: true,
    extradata: null,
    hobies: ['reading', 'writing'],
    say: function(){
        //keys haru directly access garna mildaina so we use this. function
        return `I'am ${this.name}` 
    }
}
// converts js object to JavaScript string
// console.log(JSON.stringify(users))
// console.log(JSON.parse(jsonstring))

// 3. Callback Function
function showmsg() {
    // const response = 'This is a response'
    const callbackres = document.getElementById('callback')
    callbackres.innerText = "Waiting....."

    setTimeout(() => {
        callbackres.innerText = `This is a response of callback function after 2 seconds`
    }, 2000) // 1000ms -> 1sec
}

// New
// 1. Promise (very imp): used in api calling
// a) acync
// function (api) -> acync type (single thread) code line by line flow hunxa even if it takes time
// promise has 3 states: pending, success(resolve), error(reject)

function delaymsg(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))

}

function showtext(){
    const output = document.getElementById('output1')
    output.innerText = "Waiting for promise to resolve..."

    delaymsg(3000).then(() => {
        output.innerText = "Promise resolved after 3 seconds!"
    })
}


// b) async/Await
//-> works with promise
// 1) some function call
// 2) async promise useCallback
// 3) await directly message is shown

function delaymsg(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function showtxt() {
    const output = document.getElementById('output2')
    output.innerText = "Waiting for promise to resolve..."

    await delaymsg(3000)
    output.innerText = "Promise resolved after 3 seconds!"
    console.log('Promise resolved after 3 seconds!')

}

//== and === (imp)
// if == only value is checked
// if === value and type both are checked (prefer this more)

// 2. Error Handling: try...catch
async function validate() {
    const input = document.getElementById('input').value
    const output = document.getElementById('output3')

    try {
        // futurema settime out ko saata api use hunxa
        output.innerText = "Validating...."
        await new Promise((resolve) => setTimeout(resolve, 2000))

        if (isNaN(input) || input == "") throw new Error("Not a valid number!")

        output.innerText = `Valid number: ${input}`
    } catch (error) {
        console.log(error)
        output.innerText = error.message
    } finally {
        console.log('Validation done!')
    }
}


// 3. Error Handling: then catch finally
function call(){
    const output = document.getElementById('output4')
    output.innerText = 'Calling....'

    new Promise((resolve, reject) => {
        setTimeout(() =>resolve("Calling failed!!"),2000)
    }).then(result => {
        output.innerText = result
    }).catch(error => {
        output.innerText = error.message
        // output.innerText = error if reject
    }).finally(() =>{
        output.innerText = 'Calling done...'
        console.log('calling done!!')
    })
}


