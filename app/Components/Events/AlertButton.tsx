"use client"
type btnProp = {
    message : string,
    children : string
}

function Button({message,children}:btnProp) {
  return (
    <div>
        <button onClick={()=>alert(message)}>{children}</button>
    </div>
  )
}

export default function ALertButton(){
    return(
        <>
        <Button message={"Play"}>Click Me xd</Button>
        </>
    )
}