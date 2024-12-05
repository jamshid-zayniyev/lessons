import React, { useEffect, useState } from 'react'

const Games = () => {
    const [nextStep,setNextStep] = useState('x')
    const [win,setWin] = useState(null)

    const winLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWin = () =>{
        let cells = document.querySelectorAll('#cell')
        winLine.forEach((win)=>{
            const win1 = cells[win[0]].innerHTML;
            const win2 = cells[win[1]].innerHTML;
            const win3 = cells[win[2]].innerHTML;

            // console.log(win1,win2,win3);

            if(win1 !== '' && win2 !== '' && win3 !== '' ){
                    if((win1===win2) && (win1 === win3)){
                        setWin(win1)
                    }
            }
        })
  
    }

    const handleClick = (cell) =>{
        if(cell.target.innerHTML === '' && !win){
            cell.target.innerHTML = nextStep.toUpperCase()

            if(nextStep === 'x'){
                setNextStep('o')
            }else{
                setNextStep('x')
            }
            
        }
        else if(win){
            let restart = window.confirm("Game Over !!! Wanna play again ? ")
            if(restart){
                setNextStep('x')
                setWin(null)
                let cells = document.querySelectorAll('#cell')
                cells.forEach((cell)=>{
                    cell.innerHTML = ''
                })
            }
        }
        else{
            alert('Bu yacheyka belgilangan')
        }
        checkWin()
    }


    // useEffect(()=>{
    //     checkWin()
    // },[])

  return (
    <div className='bg-[#d7e6e9] p-4'>
        <h3>next step: {nextStep.toUpperCase()}</h3>
        <h3>{win && `Winner is : ${win}`}</h3>
        <div className='w-full h-full flex justify-center items-center'>
            <div className="w-[400px] h-[400px]  bg-[#91BBC4] border-[1px] border-solid border-[#174C57] grid grid-cols-3 grid-rows-3">
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
                <div id='cell' className="border-[1px] border-solid border-[#174C57] text-[80px] flex justify-center items-center" onClick={e=>handleClick(e)}></div>
            </div>
        </div>
    </div>
  )
}

export default Games