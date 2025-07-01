// // localstorage in browser
// // browser's personal database
// // localstorage -> used for storing and retriving data in the browser


// // 3 methods:
// //  A) setItem(key, value) => to store
// //  B) getItem(key)        => to retrive value of certain key
// //  C) removeItem(key)     => to reomve key value from local storage
// //  D) clear() => deletes all keys and values from the local storage


// // to check the data in localstorage
// // inspect -> application -> localstorage -> click on site
// function saveusername(){
//     const username = document.getElementById("username").value

//     if(username){
//         // keys will be in string
//         localStorage.setItem('username', username)
//         document.getElementById('output').innerText = "Username saved in localstorage"
//     }
//     else{
//         document.getElementById('output').innerText = "Please enter username"
//     }
// }

// function getusername(){
//     const username = localStorage.getItem('username')
//     document.getElementById('output').innerText = "Username is " + username
// }

// // remove has 2 methods: clear all and clear selective

// function removeusername(){
//     // localStorage.clear() //removes all data
//     localStorage.removeItem('username') //for selective change key here key is username
//     document.getElementById('output').innerText = "Username is removed from localstorage"
// }

// About API

// API methods: GET, POST, PUT, PATCH, DELETE
// ww.example.com -> on 'GET we receive JSON respons
// GET -> fetch data
// POST -> create new data
// PUT -> update existing data
// PATCH -> update existing data 
// DELETE -> delete existing data

// in get -> if successful status will be 200
// for status code check this out https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
// remember to convert into json
function fetchphotoes() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((Response) => {
        if (!Response.ok) throw ('Failed to fetch photoes')
            // console.log(Response)
            return Response.json()
        })
        .then((date)=>{
            // console.log(date)
            const photolist = document.getElementById('photolist') 
            photolist.innerHTML = ''
            date.forEach((photo) =>{
                const li = document.createElement('li')
                li.innerHTML = `
                <strong>ID:</strong> ${photo.id}
                <br>
                <strong>Album ID:</strong> ${photo.albumId}
                <br>
                <strong>Title:</strong> ${photo.title}
                <br>
                <strong>Url:</strong> ${photo.url}
                <br>
                <img scr="${photo.thumbnailUrl}" alt = " No image found "
                `
                photolist.appendChild(li)
            })
        })
        .catch((error) => {
        console.log(error)
    })
}