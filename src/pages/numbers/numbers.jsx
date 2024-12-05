import React, { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'

const Numbers = () => {
    const [url,setUrl] = useState('http://numbersapi.com')
    const [number,setNumber] = useState(1)
    const [text,setText] = useState('text')
    const [loading,setLoading] =useState(false)


    const getText = async () =>{
        setLoading(true)
        try {
            const response = await fetch(`${url}/${number}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            setText(data)
            setLoading(false)
        } catch (error) {
            console.error('Fetch error:', error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        getText()
    },[number])


    const baseStyle = "px-4 py-2 font-semibold text-sm rounded-lg shadow-md transition-all duration-300  text-[25px]";
    const variantStyles = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
    };


  return (
    <div>
        <h4>{loading ? <PacmanLoader /> : text }</h4>
        <div className='flex justify-center items-center gap-3 bg-slate-400 text-[30px]'>
            <button className={`${baseStyle} ${variantStyles['danger']}`} onClick={()=>setNumber(prev=>prev-1)}>-</button>
            <h1>{number}</h1>
            <button className={`${baseStyle} ${variantStyles['primary']}`} onClick={()=>setNumber(prev=>prev+1)}>+</button>
        </div>
    </div>
  )
}

export default Numbers