"use client"

export default function SingUp(){
    return(
        <>
        <form onSubmit={e => {e.preventDefault(); alert("Form Submitted")}}>
            <input className="bg-gray-200 p-2 m-2" placeholder="Enter " type="text" />
            <button>Submit</button>
        </form>
        </>
    )
}