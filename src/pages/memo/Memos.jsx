import React, { useState } from 'react'
import Todos from '../../components/todos'

const Memos = () => {
    const [number,setNumber] = useState(0)
    const [todos,setTodos] = useState(['todos 1','todos 2'])
  return (
    <div>
        <Todos/>
        <p>Count: {number}</p>
        <button className='bg-lime-700 p-2 text-[white] rounded-md' onClick={()=>setNumber(number+1)}>Inrement</button>
    </div>
  )
}

export default Memos