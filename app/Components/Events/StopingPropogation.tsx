"use client"

export default function StopingPropogation() {
    return (
        <>
            <Toolbar submitForm={() => alert("Form Submitted")} uploadImage={() => alert("upload Image")} />
        </>
    )
}
type BtnPro = {
    children: string,
    onClickFun: () => void
}

function Button({ children, onClickFun }: BtnPro) {
    return (
        <button onClick={e => {
            e.stopPropagation();
        onClickFun();
        }}
        >{children}</button>
    )
}

function Toolbar({ submitForm, uploadImage }: { submitForm: () => void, uploadImage: () => void }) {
    return (
        <div onClick={() => alert("Hello Div")}>
            <Button onClickFun={submitForm}>Submit Form</Button>
            <Button onClickFun={uploadImage}>Upload Image</Button>
        </div>
    )
}