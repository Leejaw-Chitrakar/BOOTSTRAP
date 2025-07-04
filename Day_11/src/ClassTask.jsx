import React, { useState } from 'react'


export const ClassTask = () => {
    // const [inputcontent, setintputcontent] = useState('')
    // const handelonchange = (e) => {
    //     setintputcontent(e.target.value)
    //     console.log(inputcontent)
    // }

    const CL = () => {
        return (
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                
            </h1>
        )
    }

    const WB = () => {
        return(
            <h3 style={{ display: 'flex', justifyContent: 'center' }}>
                {CS}
            </h3>
        )
    }

    const [status, setstatus] = useState(false)
    const [CS, changeit] = useState('')
    
    const handelonchange = (e) => {
        changeit(e.target.value)
        console.log(CS)

    }
    return (
        <>
        <h1>-------------------------------------------------------------------------</h1>
        <br />
            <input
                onChange={handelonchange}
                type="text"
                placeholder="Type something here..."
                style={{display: 'flex', justifyContent: 'center',marginLeft: 680}}
            ></input>
            <br />
            <br />
            <button style={{display: 'flex', justifyContent: 'center',marginLeft: 710}} onClick={() => setstatus(!status)} >Print Value</button>
            {status ? <WB /> : <CL />}
        </>
    )
}
