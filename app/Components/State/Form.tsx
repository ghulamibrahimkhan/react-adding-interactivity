"use client"
import { useState } from "react"
import { ChangeEvent } from "react";

export default function Form() {

    const  [fstName,setFstName] = useState("");
    const  [lstName,setLstName] = useState("");

    function handleFstName(e:ChangeEvent<HTMLInputElement>){
        setFstName(e.target.value);
    }
    function handleLstName(e:ChangeEvent<HTMLInputElement>){
        setLstName(e.target.value);
    }
    function handleReset(){
        setFstName("")
        setLstName("")
    }

  return (
    <form onSubmit={e=> e.preventDefault()}>
        <input type="text" placeholder="Enter First Name" onChange={handleFstName}/>
        <input type="text" placeholder="Enter Last Name" onChange={handleLstName}/>
        <p>Hi {`${fstName } ${lstName}`}</p>
        <button onClick={handleReset}>Reset</button>
    </form>
  )
}
