"use client"

import { ChangeEvent, useState } from "react"

export default function SinglelHandlerForm(){    
    const [person,setPerson] = useState({
        firstName : "Ibrahim",
        lastName  : "Khan",
        email     : "ibrahimkhan@gmail.com"
    })
    function handleOnChange(e: ChangeEvent<HTMLInputElement>){
      setPerson({
        ...person,
        [e.target.name]: e.target.value
      })
    }
    return (
    <>
     <h1 className="text-5xl w-96 p-5 mt-20 text-center m-auto bg-slate-200">Using Silgle Event Handler</h1>

     <div>
        <label>
          First Name: 
          <input type="text" 
          className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
          name="firstName"
          onChange={handleOnChange}
          value={person.firstName}
          />
        </label>
     </div>
     <div>
        <label>
          Last Name: 
          <input type="text" 
          className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
          name="lastName"
          onChange={handleOnChange}
          value={person.lastName}
          />
        </label>
     </div>
     <div>
        <label>
          First Name: 
          <input type="text" 
          className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
          name="email"
          onChange={handleOnChange}
          value={person.email}
          />
        </label>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        <p>{person.email}</p>
     </div>
    </>
  )
}