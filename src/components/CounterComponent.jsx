import React, { useState } from "react";

const CounterComponent = () => {
    const [count, setCount]= useState(12);
    const[value, setValue]= useState("Sam");


    return(
        <div>
            <p>Count Component - {count}</p>
            <h6>Number is:{count % 2 === 0 ? " Even" : " Odd" }</h6>
            <button onClick={() => setCount(count-1)} >Decrement</button>
            <button onClick={() => setCount(count+1)} >Increment</button>
        </div>
    )
}

export default CounterComponent;