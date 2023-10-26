"use client"

import React from 'react';
import { useState } from "react";


export default function DropDownForm() {

  const [to, SetTo] = useState("Ibahim");
  const [message, setMessage] = useState("Hello");

  return (
    <form className='m-3 p-3' onSubmit={e => {
      e.preventDefault();
      alert(`${to} upgraded`);
    }}>
      <label htmlFor="">
        To {" "}
        <select onChange={(e)=> SetTo(e.target.value)}>
          <option value="Ibrahim">Ibrahim</option>
          <option value="Bilal">Bilal</option>
        </select>
        <br />
        <textarea value={message} onChange={(e) => setMessage(e.target.value) } className='border-2 border-gray-400' cols={7} rows={3} />
        <br />
        <button className='border-2 border-gray-400 px-4 py-2 rounded-lg' type='submit'>Send</button>
      </label>
    </form>
  )
}
