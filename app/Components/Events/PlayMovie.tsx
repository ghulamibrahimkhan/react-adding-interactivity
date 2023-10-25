"use client"

export default function PlayMovie() {
    return (
        <>
            <MultiBtn/>
        </>
    )
}

type ButtonProps = {
    click1: () => void;
    btnName: string;
};
function Button({click1,btnName}: ButtonProps ){
    return(
        <>
        <button onClick={click1}>
            {btnName}
        </button>
        </>
    )
}

function MultiBtn(){
    return(
        <>
        <Button click1={()=>alert("Movie")} btnName="Movie"/>
        <Button click1={()=>alert("Video")} btnName="Video"/>
        </>
    )
}