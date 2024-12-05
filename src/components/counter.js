import React,{useState} from "react"
import { Button } from 'react-bootstrap';


function Counter(){
    const [number,setNumber] = useState(1)
    
    const productPrice = 38000;


    const Increment = () =>{
        setNumber(number+1)
    }

    const Decrement = () =>{
        if(number !== 1 && number > 1){
            setNumber(number-1)
        }
    }


    return(
        <div className='d-flex gap-2'>
            <Button onClick={Increment} variant='outline-success'>Increment + </Button>
            <h1>{number}</h1>
            <Button onClick={Decrement} variant='outline-danger'>Decrement - </Button>
            <h1>{number*productPrice}</h1>
        </div>
    )
}

export default Counter