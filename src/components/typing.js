import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Typing = () => {
    const [text,setText] = useState('...typing')

    // const handleChange = (e) =>{
    //     const inputValue = e.target.value;
    //     setText(inputValue)
    // }

  return (
    <div  className='my-4'>
        <Form.Control
          onChange={(e)=>setText(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <p className='my-1'>{text}</p>
    </div>
  )
}

export default Typing