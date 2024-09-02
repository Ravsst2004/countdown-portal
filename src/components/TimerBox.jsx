export default function TimerBox({ level, timeEnded }) {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg p-10 bg-orange-500">
      <h1 className="text-4xl font-semibold">{level}</h1>

      <p className="border-2 y-2 px-4 rounded-md w-fit mx-auto text-lg">
        {timeEnded} Second
      </p>

      <button className="text-2xl font-semibold p-4 rounded-md w-fit mx-auto bg-slate-950 hover:bg-slate-800">
        Start Challenge
      </button>
    </div>
  );
}
