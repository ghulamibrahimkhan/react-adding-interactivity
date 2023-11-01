"use client"
import { useState } from "react"


export default function IncrementingCounter() {

  const [number,setNumber] = useState(0);
  
  function handleClick(){
    setNumber(n=> n+1);
    setNumber(n=> n+1);
    setNumber(n=> n+1);
  }

  return (
    <div className="p-4 m-4">
    <span className="mr-3 text-2xl font-bold">{number}</span> <button onClick={handleClick} className="border-2 border-gray-500 px-4 py-2 text-2xl font-bold">+3</button>
    </div>
  )
}
