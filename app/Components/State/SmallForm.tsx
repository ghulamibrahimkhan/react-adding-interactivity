"use client"
import { useState } from "react"

export default function SmallForm() {

  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return (
      <>
        <h1>Thank You</h1>
        <p>{message}</p>
      </>
    )
  } else {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        alert(`Sending ${message}`)
      }}>
        <textarea onChange={e => setMessage(e.target.value)} placeholder="Message" value={message} cols={10} rows={5} className="mx-6 border-2 border-gray-700"></textarea>
        <button type="submit">Submit</button>
      </form>
    )
  }



}
