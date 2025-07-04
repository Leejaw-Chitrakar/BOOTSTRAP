// // function App(){
// //   return <h1 style={{display:'flex', justifyContent:'center'}}>Welcome</h1>
// // }

import { useState } from "react"

// // export default App

// // use rafc(shortform) to make a default component

// // Jun part change vhyo tai part mattra refrace hunxa 

// // components -> state
// // herek components ko aafnai state hunxa


// //To get all props
// // const Showmyname = (props) => {
// //   return <h1>My name is {props.name} and I live in {props.address}</h1>
// // }

// // To get specific props
// const Showmyname = ({name, address}) => {
//   return <h1>My name is {name} and I live in {address}</h1>
// }

// // const obj = {
// //   id: 1,
// //   name: 'Leejaw Chitrakar',
// //   address: 'Kathmandu',
// // }

// const App = () => {
//   const myname = 'Leejaw Chitrakar'
//   const myaddress = 'Kathmandu'
//   return (
//     //empty component
//     <> 
//       <h1 style={{ display: 'flex', justifyContent: 'center' }}>Welcome</h1>
//       <Showmyname 
//       name={myname}
//       address={myaddress}
//       // obj = {obj}
//       />
//     </>
//   )
// }

// export default App


const Welcome = () => {
  return (
    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
      Welcome to the page
    </h3>
  )
}

const Notallowed = () => {
  return (
    <h3 style={{ display: 'flex', justifyContent: 'center' }}>
      Your are not Welcome
    </h3>
  )
}

const App = () => {
  // Sippose this is comming from backend
  // Here status is a variable, setstatus is a function to set value in the variable
  const [status, setstatus] = useState(true) //status is hooked

  const [inputcontent, setintputcontent] = useState('')
  const handelonchange = (e) => {
    setintputcontent(e.target.value)
    console.log(inputcontent)
  }

  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        App Component
      </h1>
      {status ? <Welcome /> : <Notallowed />}
      <br />
      <input style={{ marginLeft: 675 }} type="text" placeholder="type something here...." onChange={handelonchange} />
      <br />
      <br />
      <button onClick={() => setstatus(!status)} style={{ marginLeft: 690 }}>Change Status</button>
    </>
  )
}

export default App