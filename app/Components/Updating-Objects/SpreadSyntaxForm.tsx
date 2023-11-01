"use client"

import { ChangeEvent, useState } from "react";
import SinglelHandlerForm from "./SinglelHandlerForm";

export default function SpreadSyntaxForm() {

  const [person, setPerson] = useState({
    firstName: "Ibrahim",
    lastName: "Khan",
    email: "ibrahimkhan@gmail.com"
  })

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      firstName: e.target.value
    })
  }
  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>){
    setPerson({
      ...person,
      lastName : e.target.value
    })
  }
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>){
    setPerson({
      ...person,
      email : e.target.value
    })
  }

  return (
    <>
    <div className="ml-4 m-4 flex flex-row">
      <div className="w-1/4">
        <label className="block">
          First Name:
          <input
            value={person.firstName}
            onChange={handleFirstNameChange}
            className="bg-gray-50 border-2 border-gray-400 rounded-lg p-2 m-2 hover:bg-slate-100 hover:border-gray-500" type="text" />
        </label>
      </div>
      <div className="w-1/4">
        <label className="block">
          Last Name:
          <input 
          value={person.lastName}
          onChange={handleLastNameChange}
          className="bg-gray-50 border-2 border-gray-400 rounded-lg p-2 m-2 hover:bg-slate-100 hover:border-gray-500" type="text" />
        </label>
      </div>
      <div className="w-1/4">
        <label className="block">
          Email:
          <input 
          value={person.email}
          onChange={handleEmailChange}
          className="bg-gray-50 border-2 border-gray-400 rounded-lg p-2 m-2 hover:bg-slate-100 hover.border-gray-500" type="email" />
        </label>
      </div>
      <br />
    </div>
    <p className="ml-4">
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    <div>
     
      </div>

      <SinglelHandlerForm />
    </>
  )
}
