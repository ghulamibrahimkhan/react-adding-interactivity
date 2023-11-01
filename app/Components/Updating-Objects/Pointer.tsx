"use client"

import { useState } from "react"

export default function Pointer() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div onPointerMove={e => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }}
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        position: "relative"
      }}
    >
      <div style={{
        backgroundColor: "white",
        height: "50px",
        width: "50px",
        left: "-20px",
        top: "-20px",
        borderRadius: "50%",
        position: "absolute",
        transform: `translate(${position.x}px,${position.y}px)`
      }}></div>
    </div>
  )
}
