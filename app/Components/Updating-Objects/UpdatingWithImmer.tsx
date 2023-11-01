"use client"

import { ChangeEvent } from "react"
import { useImmer } from "use-immer"

// npm install use-immer

export default function UpdatingWithImmer() {
    const [student, setStudent] = useImmer({
        Name: "Ibrahim Khan",
        age: 20,
        semester: "6th semester",
        subjects: {
            sub1: {
                subName: "Englihs",
                marks: 100
            },
            sub2: {
                subName: "Urdu",
                marks: 80
            },
            sub3: {
                subName: "Maths",
                marks: 70
            },
        }
    })

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        setStudent(draft => {
            draft.Name = e.target.value
        })
    }
    function handleAgeChange(e: ChangeEvent<HTMLInputElement>) {
        setStudent(draft => {
            draft.age = parseInt(e.target.value)
        })
    }
    function handleSemChange(e: ChangeEvent<HTMLInputElement>) {
        setStudent(draft => {
            draft.semester = e.target.value
        })
    }

    function handleSub1Change(e:ChangeEvent<HTMLInputElement>){
        setStudent(draft=>{
            draft.subjects.sub1.marks = parseInt(e.target.value)
        })
    }
    function handleSub2Change(e:ChangeEvent<HTMLInputElement>){
        setStudent(draft=>{
            draft.subjects.sub2.marks = parseInt(e.target.value)
        })
    }
    function handleSub3Change(e:ChangeEvent<HTMLInputElement>){
        setStudent(draft=>{
            draft.subjects.sub3.marks = parseInt(e.target.value)
        })
    }
    
    return (
        <>
            <div className=" ml-80  mt-14 ">
                <label>
                    Name:
                    <input type="text"
                        className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                        onChange={handleNameChange}
                        value={student.Name}
                    />
                </label>
                <label>
                    Age:
                    <input type="number"
                        className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                        value={student.age}
                        onChange={handleAgeChange}
                    />
                </label>
                <label>
                    Class:
                    <input type="text"
                        className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                        value={student.semester}
                        onChange={handleSemChange}
                    />
                </label>

                {/* Subjects */}
                <br /><br />
                <label>
                    {student.subjects.sub1.subName}:
                    <input type="numer"
                        className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                        name="firstName"
                        value={student.subjects.sub1.marks}
                        onChange={handleSub1Change}
                    />
                </label>
                <br /><br />
                <label>
                    {student.subjects.sub2.subName}:
                    <input type="numer"
                        className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                        name="firstName"
                        value={student.subjects.sub2.marks}
                        onChange={handleSub2Change}
                        />
                </label>
                <br /><br />
                <label>
                    {student.subjects.sub3.subName}:
                    <input type="numer"
                        className="border-2 border-gray-400 bg-gray-50 rounded-lg p-1"
                        name="firstName"
                        value={student.subjects.sub3.marks}
                        onChange={handleSub3Change}
                    />
                </label>
                <p>{`Total Marks of ${student.Name} are ${student.subjects.sub1.marks + student.subjects.sub2.marks + student.subjects.sub3.marks}`}</p>
            </div>
        </>
    )
}
