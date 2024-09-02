import React from "react";
import TimerBox from "../components/TimerBox";
import ResultModal from "../components/ResultModal";

export default function App() {
  return (
    <div className="md:h-screen flex flex-col items-center justify-center">
      <ResultModal />
      <div className="bg-orange-950 rounded-lg py-6 text-center text-white w-full max-w-screen-xl">
        <h1 className="text-6xl font-bold">Countdown Portal</h1>
        <p className="text-2xl">
          Stop the timer once you estimate the time is almost end
        </p>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-28">
          <TimerBox level="easy" timeEnded={1} />
          <TimerBox level="medium" timeEnded={5} />
          <TimerBox level="hard" timeEnded={10} />
          <TimerBox level="extreme" timeEnded={20} />
        </div>
      </div>
    </div>
  );
}
