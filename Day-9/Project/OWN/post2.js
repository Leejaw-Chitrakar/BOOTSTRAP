localStorage.setItem('username', 'Leejaw Chitrakar')
// localStorage.clear()

const username = localStorage.getItem('username')
document.getElementById('username').textContent = username || 'Guest'

function fetchposts() {
    // after '?' parameters
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((response) => {
            if (!response.ok) throw Error('Failed to fetch post')
            return response.json()
        }).then((data) => {
            const postlist = document.getElementById("postlist")
            postlist.innerHTML = ''

            data.forEach((post) => {
                const li = document.createElement('li')
                li.innerHTML = `
                <strong>ID:</strong> ${post.id}
                <br>
                <strong>User ID:</strong> ${post.userId}
                <br>
                <strong>Title:</strong> ${post.title}
                <br>
                <strong>Body:</strong> ${post.body}
                <br><br>
                <button onclick="patchputdata(${post.id})">Patch/Put</button>
                <button onclick="deletepost(${post.id})">Delete</button>
                <br><br>
                `
                postlist.appendChild(li)
            })
        })
        .catch((error) => {
            console.error('Error fetching post:', error)
        })
}
fetchposts()

//fetch post() 
function addpost() {
    document.getElementById('postform').addEventListener('submit', (e) => {
        e.preventDefault()
        const ptitle = document.getElementById('posttitle').value
        const pbody = document.getElementById('postbody').value
        // console.log(title)
        // console.log(body)

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: ptitle,
                body: pbody,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(`Post Data: ${data}`)
        })
    })
}
addpost()

function patchputdata(id) {
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: `PATCH`,  //PATCH for partial update
        // method: `PUT`, // PUT for full update
        // userId:1,
        // id: id,
        body: JSON.stringify({
            title: 'Test Title',

        }),
    })
        .then(() => console.log(`Post with ID ${id} updated successfully`))
        .catch((err) => console.error(err))
}

function deletepost(id) {
    console.log(`Post Deleted ID: ${id}`)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then(() => console.log(`Delete Successful of Id: ${id}`))
        .catch((err) => console.error(err))
}