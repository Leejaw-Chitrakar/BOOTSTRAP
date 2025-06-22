console.log('External JavaScript')

console.log("--------------------Fourth Part--------------------")

// Functions
// Method 1: (es5)

function logMyName() {
    //logic here
    console.log(`Hello for Tadashi`)
}

// Method 2: (es6)
// Arrow function (Prefered in mordern JavaScript) (used in react)
const printMyName = () => {
    console.log(`Arrow function call`)
}


logMyName()
printMyName()



function logMyFname(first = `first`) {
    //logic here
    console.log(`Default function keyword: ${first}`)
}

// default
logMyFname()
// custom
logMyFname(`Ron`)