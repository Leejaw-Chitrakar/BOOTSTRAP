const fruits = ["apple", "banana", "mango","watermellon", "papaya"]
for (let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}

console.log("------------------------------------")

for(let index in fruits){
    console.log('For in: ',index,fruits[index])
}

console.log("------------------------------------")


let i = 0
while(i<fruits.length){
    console.log("While: ",fruits[i])
    i++
}

console.log("------------------------------------")

for(let fruit of fruits){
    console.log("For of: ",fruit)
}

console.log("------------------------------------")

