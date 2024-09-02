import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerBox({ level, targetTime }) {
  const timer = useRef();
  const dialogRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogRef.current.open();
  }

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialogRef.current.open();
  };

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        handleReset={handleReset}
      />

      <div className="flex flex-col gap-y-4 rounded-lg p-4 md:p-10 bg-orange-500">
        <h1 className="text-4xl font-semibold">{level}</h1>

        <p className="border-2 y-2 px-4 rounded-md w-fit mx-auto text-lg">
          {targetTime} {targetTime === 1 ? "Second" : "Seconds"}
        </p>

        <button
          onClick={timeIsActive ? handleStop : handleStart}
          className="md:text-2xl font-semibold p-4 rounded-md w-fit mx-auto bg-slate-950 hover:bg-slate-800"
        >
          {timeIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={`text-xl`}>
          {timeIsActive ? "Timer is running..." : "Timer is inactive"}
        </p>
      </div>
    </>
  );
}
