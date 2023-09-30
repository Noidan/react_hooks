import React, { useRef } from 'react'

const Hover = () => {
    const ref = useRef()

    return (
        <div ref = {ref} style={{ width: 300, height: 300, background: 'red' }}>
            useHover
            <button onClick={()=> console.log(ref.current)}>Click me</button>
        </div>
    )
}

export default Hover