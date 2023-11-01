"use client"
import { ChangeEvent, useState } from "react"


export default function UpdatingNestedObject() {
    const [person, setPerson] = useState({
        Name: "Ibrahim Khan",
        Info: {
            Title: "Pasha KHan",
            City: "Karachi",
            Height: 5
        }
    })

    function handleOnChange(e:ChangeEvent<HTMLInputElement>) {
        setPerson({
            ...person,
            Info: {
                ...person.Info,
                [e.target.name] : e.target.value
            }
        })
    }
    function handleNameChange(e:ChangeEvent<HTMLInputElement>){
        setPerson({
            ...person,
            Name: e.target.value
        })
    }

    return (
        <>
            <label>
                Name:
                <input
                    type="text"
                    value={person.Name}
                    className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    type="text"
                    value={person.Info.Title}
                    className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                    onChange={handleOnChange}
                    name="Title"

                />
            </label>
            <label>
                City:
                <input
                    type="text"
                    value={person.Info.City}
                    className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                    onChange={handleOnChange}
                    name="City"


                />
            </label>
            <label>
                Height:
                <input
                    type="text"
                    value={person.Info.Height}
                    className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                    onChange={handleOnChange}
                    name="Height"

                />
            </label>
            <br /><br /><hr />
            <p>Name:  {person.Name}</p>
            <p>Title: {person.Info.Title}</p>
            <p>City:  {person.Info.City}</p>
            <p>Height: {person.Info.Height}</p>
            <hr />
        </>
    )
}
