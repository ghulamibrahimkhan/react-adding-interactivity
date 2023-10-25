"use client"
import { useState } from "react"
import { sculptureList } from "./data"



export default function Gallery() {


    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false)

    let next = index < sculptureList.length - 1;
    let prev = index > 0
    function handleClick() {
        if (next) {
            setIndex(index + 1);
        }
    }
    function handleClickPrev(){
        if (prev) {
            setIndex(index - 1)
        }
    }
    function handleShowMore() {
        setShowMore(!showMore)
    }


    return (
        <>
            <div className="m-6">
                <button onClick={handleClick} disabled={!next} className="bg-grey-100 border-slate-600 border-2 px-4 py-1 disabled:bg-red-400">Next</button>
                <button onClick={handleClickPrev} disabled={!prev} className="bg-grey-100 border-slate-600 border-2 px-4 py-1 disabled:bg-red-400">Prev</button>
                <h2 className="text-2xl font-bold">{sculptureList[index].name}</h2>
                <p>({`${index + 1} of ${sculptureList.length}`})</p>
                <p>{sculptureList[index].artist}</p>
                <button onClick={handleShowMore} className="bg-grey-100 border-slate-600 border-2 px-4 py-1">{showMore ? "Hide" : "Show More"}</button>
                <p>{showMore && sculptureList[index].description}</p>
            </div>
        </>
    )
}
