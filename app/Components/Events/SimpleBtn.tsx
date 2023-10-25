"use client"

export default function SimpleBtn() {

    function handleClick() {
        alert("Hello World");
    }
    return (
        <>
        <button onClick={handleClick}>Click Me</button>
        </>
    )
}
