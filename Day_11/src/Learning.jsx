import React, { useState } from 'react'

export const Learning = () => {

    const Hide = () => {
        return (
            <h1>HIDDEN</h1>
        )
    }

    const Show = () => {
        return (
            <h1>{toggleStatus}</h1>
        )
    }

    const [status, setStatus] = useState(false);
    const [toggleStatus, changeststus] = useState('')

    const handleOnChange = (e) => {
        changeststus(e.target.value)
        console.log(toggleStatus)
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h1>-------------------------------------------------------------------------</h1>
                <input type="text" onChange={handleOnChange}
                    placeholder="Type something here..."
                />
                <br />
                <br />
                <button onClick={() => setStatus(!status)}>Show/Hide Value</button>
                {status ? <Show /> : <Hide />}
            </div>
        </>
    )
}
