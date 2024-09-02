import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, result, timeRemaining, handleReset },
  ref
) {
  const dialogRef = useRef();

  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  let score = !userLost
    ? Math.round((1 - timeRemaining / (targetTime * 1000)) * 100)
    : 0;

  // Randomize score between 40 and 80 (KECURANGNAN BANDAR)
  // if (score > 80) {
  //   score = Math.floor(Math.random() * (70 - 40 + 1)) + 40;
  // }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dialogRef.current.close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  const userResult = (
    <>
      {userLost ? (
        <h1 className="text-4xl font-bold uppercase">You lost</h1>
      ) : (
        <h1 className="text-4xl font-bold uppercase">Your Score: {score}</h1>
      )}
    </>
  );

  return createPortal(
    <dialog
      ref={dialogRef}
      className="text-start p-2 rounded-lg animate-slideDown"
    >
      {userResult}
      <p className="text-xl md:text-2xl pt-2">
        The target time was{" "}
        <span className="font-bold">{targetTime} Second</span>
      </p>
      <p className="text-xl md:text-2xl">
        You stopped the timer with{" "}
        <strong>{formattedTimeRemaining} Second left</strong>
      </p>

      <form
        method="dialog"
        className="flex justify-end pt-2"
        onSubmit={handleReset}
      >
        <button className="text-xl text-white font-semibold py-2 px-4 bg-slate-950 rounded-lg">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
