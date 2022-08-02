import React, { useState } from "react";

const Counter = () => {

let [number, setNumber] = useState(0)


const increase = ()=>{

var num = number + 1

    setNumber(num)
    console.log(number);
}

  return (
    <div>
      <h1>
        {number}
      </h1>
      <button onClick={increase} >+</button>
      <button>-</button>
    </div>
  );
};


export default Counter