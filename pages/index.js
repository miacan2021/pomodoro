import { useState, useEffect, useRef } from "react";
import Alarm from "../components/Alarm";
import Nav from "../components/Nav";
import Timer from "../components/Timer";


export default function Home() {
  const [pomodoro, setPomodoro] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(10)
  const [stage, setStage] = useState(0)
  const [second, setScond] = useState(0)
  const [tickings, setTickings] = useState(false)
  const [consumeSecond, setConsumeSecond] = useState(0)
  const alarmRef = useRef()

  const switchStage = (i)=>{
      const isYes = consumeSecond && stage !== i ? confirm('Are you sure you want to switch') : false
      if(isYes){
        reset()
        setStage(i)
      }else if(!consumeSecond){
        setStage(i)
      }
      setStage(i)
  }
  const getTrackingTime = () => {
      const timeStage ={
        0:pomodoro,
        1:shortBreak,
        2:longBreak
      }
      return timeStage[stage]
  }
  const updateMin = () =>{
    const updateStage ={
      0:setPomodoro,
      1:setShortBreak,
      2:setLongBreak
    }
    return updateStage[stage]
   
  }
 
const reset = () =>{
  setTickings(false)
  setScond(0)
  setPomodoro(25)
  setShortBreak(5)
  setLongBreak(10)
  setConsumeSecond(0)
}

const timeUp =() =>{
  reset()
  alarmRef.current.play()
}
  const clockTicking = () =>{
    const min = getTrackingTime();
    const setMin = updateMin();

    if(min === 0 && second === 0){
    timeUp()
    }else if(second === 0){
      setMin((prevMin) => prevMin-1)
      setScond(59)
    }else{
        setScond((second) => second-1)
    }
  }

  useEffect(() => {
   const timer = setInterval(() =>{
     if(tickings){
      clockTicking()
      setConsumeSecond((value) => value + 1)
     }
   },1000)

   return () => { clearInterval(timer) }
  },[second, pomodoro, shortBreak, longBreak, tickings])

  return (

    <div className="bg-base min-h-screen">
      <div className="max-w-2xl min-h-screen bg-base mx-auto">
        <Nav />
        <Timer 
        stage={stage} 
        switchStage={switchStage} 
        getTrackingTime={getTrackingTime} 
        second={second}
        tickings={tickings}
        setTickings={setTickings}
        reset={reset}
        />
      <Alarm ref={alarmRef} />
      </div>
    </div>
  )
}
