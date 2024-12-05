import React, { useEffect, useState } from 'react'




const Timer = () => {
  const [seconds,setSeconds] = useState(0)
  const [isActive,setIsActive] = useState(false)

  useEffect(()=>{
    let interval = null;
    if(isActive){
      interval = setInterval(()=>{
        setSeconds(prev=>prev+1);
      },100)
    }else if(isActive === false && seconds === 0){
      clearInterval(interval)
    }

    return ()=> clearInterval(interval)


  },[isActive])


  const startTimer = () =>{
    setIsActive(true)
  }

  const stopTimer = () =>{
    setIsActive(false)
  }

  const resetTimer = () =>{
    setSeconds(0)
    setIsActive(false)
  }

  return (
    <div className='bg-cyan-400 w-full min-h-[70vh] flex justify-center items-center rounded-md'>
      <div className='bg-[white] px-32 py-8 rounded-md shadow-2xl'>
        <p className='font-[900] text-center text-[20px]'>Timer</p>
        <p className='font-[900] text-center text-[20px]'>{seconds}</p>
        <div className='buttons text-center '>
          <button className='bg-cyan-400 hover:bg-cyan-700 font-[700] text-white p-1 px-2 rounded-[5px]' onClick={startTimer}>Start</button>
          <button className='bg-cyan-400 hover:bg-cyan-700 font-[700] text-white p-1 px-2 rounded-[5px] mx-2' onClick={stopTimer}>Stop</button>
          <button className='bg-cyan-400 hover:bg-cyan-700 font-[700] text-white p-1 px-2 rounded-[5px]' onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer