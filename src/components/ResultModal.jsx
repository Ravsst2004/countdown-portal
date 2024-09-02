import React from "react";

export default function ResultModal({ targetTime = 0 }) {
  return (
    <dialog className="p-2 rounded-lg">
      <h1 className="text-4xl font-bold uppercase">You Won/Lose</h1>
      <h1 className="text-4xl font-bold uppercase">your Score: 10</h1>
      <p className="text-xl pt-2">
        The target time was{" "}
        <span className="font-bold">{targetTime} Second</span>
      </p>
      <p className="text-xl">
        You stopped the timer with{" "}
        <span className="font-bold">0.50 Second left</span>
      </p>

      <form method="dialog" className="flex justify-end pt-2">
        <button className="text-xl text-white font-semibold py-2 px-4 bg-slate-950 rounded-lg">
          Close
        </button>
      </form>
    </dialog>
  );
}
