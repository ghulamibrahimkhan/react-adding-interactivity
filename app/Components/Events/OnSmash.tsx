"use client"


type Smash = {
    onSmash : () => void;
}

function Button({onSmash}:Smash) {
  return (
    <button onClick={onSmash}>Click</button>
  )
}


export default function OnSmash(){
    return(
        <>
    <Button onSmash={()=> alert("Smashing")}/>
        </>
    )
}