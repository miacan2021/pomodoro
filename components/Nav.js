import React from 'react'
import { HiOutlineClock} from "react-icons/hi";



export default function Nav() {
    return (
        <nav className="pt-5 text-danger flex justify-between items-center w-11/12 mx-auto" >
            <div className="flex items-center gap-1 cursor-pointer ">
            <HiOutlineClock className="text-xl" />
            <h1>POMODORO</h1>
            </div>
        </nav>
    )
}
