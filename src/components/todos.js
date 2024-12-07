import React, {memo, useState} from 'react'

const Todos = () => {
    const [number,setNumber] = useState(0)
    console.log("salom todos");
  return (
    <div>
        <h1>Todos</h1>
        <p>{number}</p>
        <button className='bg-red-900 p-2 text-[white] rounded-md' onClick={()=>setNumber(number-1)}>Decrement</button>
        <hr />
    </div>
  )
}

export default memo(Todos)