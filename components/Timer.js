import React from 'react'

const Timer = ({ stage, switchStage, getTrackingTime, second, tickings, setTickings, reset }) => {
    const options = ["Pomodoro", "Short Break", "Long Break"]
    return (
        <div 
        className="text-danger w-10/12 mx-auto pt-5 flex flex-col items-center justify-center mt-10">
            <div className="flex items-center gap-5">
                {options.map((option,i) => (
                    <h1 key={i} className={`${i === stage ? 'bg-primary': ''} p-1.5 cursor-pointer transition-all rounded hover:text-secondary`}
                    onClick={() => switchStage(i)}
                    >
                    {option}
                    </h1>
                ))}
            </div> 
            <div className="mt-40 mb-40">
                <h1 className="text-8xl select-none font-bold m-0">
                    {getTrackingTime()}:{second.toString().padStart(2,"0")}
                </h1>
            </div>
            <button onClick={() => setTickings((tickings)=>!tickings)} className=" mb-5 px-10 py-2 text-danger w-56 text-2xl rounded-md bg-primary font-bold uppercase hover:text-base">
                {tickings ?  "Stop" : "Start"}
            </button>
            <button onClick={reset} className="mt-2 px-16 py-2 text-danger text-2xl rounded-md  w-56 bg-primary font-bold uppercase hover:text-base">
                Reset
            </button>
        </div>

    )
}

export default Timer
