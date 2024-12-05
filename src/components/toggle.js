import { useState } from "react"
import { Button } from "react-bootstrap"

const Toggle = () =>{
    const [toggle,setToggle] = useState(true)

    // const showText = () =>{
    //     setToggle(true)
    // }
    // const hideText = () => {
    //     setToggle(false)
    // }
    // const handleClick = () => setToggle(!toggle)

    return(
        <div className="toggle my-4">
            {toggle === true ? <p className="toggle__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, enim!</p> : '' }
            <Button onClick={() => setToggle(!toggle)} variant='outline-primary' className="m-2">Toggle</Button>
            
            {/* <Button onClick={() => setToggle(true)} variant='outline-primary' className="m-2">Show</Button>
            <Button onClick={() => setToggle(false)} variant='outline-danger'>Hide</Button> */}

        </div>
    )
}

export default Toggle