import React from "react";
import TimerBox from "../components/TimerBox";
import ResultModal from "../components/ResultModal";

export default function App() {
  return (
    <div className="md:h-screen flex flex-col items-center justify-center">
      <div className="bg-orange-950 rounded-lg py-6 text-center text-white w-full max-w-screen-xl">
        <h1 className="text-6xl font-bold">Countdown Portal</h1>
        <p className="text-2xl">
          Stop the timer once you estimate the time is almost end
        </p>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-10 sm:px-28">
          <TimerBox level="easy" targetTime={1} />
          <TimerBox level="medium" targetTime={5} />
          <TimerBox level="hard" targetTime={10} />
          <TimerBox level="extreme" targetTime={20} />
        </div>
      </div>
    </div>
  );
}
