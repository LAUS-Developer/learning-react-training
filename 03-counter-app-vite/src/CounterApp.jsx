import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {

    console.log("render");

    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter+1);
    }
    const handleSubstract = () => setCounter (counter-1);
    const handleReset = () => setCounter (0);

    /* Class Excercise

    const handleAdd=()=>{
        //setCounter(counter+1)
        setCounter ((c)=> c+1)
    }
    const handleReduce=()=>{
        //setCounter(counter-1)
        setCounter ((c)=> c-1)
    }
    const handleReset=()=>{
        //setCounter(counter=0)
        setCounter ((c)=> c=0)
    }
    
    
    */
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSubstract}>
                -1
            </button>
            <button onClick={handleReset}>
                +set
            </button>
        </>
    )
/* First excercise
    function handleAdd (event,newValue){
        console.log(newValue)
    }
    return (
        <>
            <h1>{title}</h1>
            <p>{myvalue}</p>
            <button onClick={(event)=>handleAdd(event,"hola")}>
                +1
                </button>
        </>
    )



*/
}

CounterApp.propTypes = {
    title:PropTypes.string.isRequired,
    myvalue:PropTypes.number.isRequired
}
