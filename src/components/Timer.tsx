import { useEffect, useState } from "react";
import { secondsToMinutes } from "@/utils";
import useSound from "use-sound";

type TimerProps = {};

export default function Timer(props: TimerProps) {
  const [play] = useSound("mp3/jobs-done.mp3");
  const [state, setState] = useState({
    timeRemaining: 0,
    timeoutInstance: 0,
  });

  useEffect(() => {
    if (state.timeRemaining === 0) {
      if (state.timeoutInstance) play();
      state.timeoutInstance && clearInterval(state.timeoutInstance);
    }
  }, [state]);

  function startTimer(seconds: number) {
    if (state.timeRemaining > 0) return; // timer is already running
    const timer = setInterval((props: TimerProps) => {
      setState((prevState) => ({
        ...prevState,
        timeRemaining: prevState.timeRemaining - 1,
      }));
    }, 1000);

    setState({ timeRemaining: seconds, timeoutInstance: timer });
  }

  function stopTimer() {
    state.timeoutInstance && clearInterval(state.timeoutInstance);
    setState({ timeRemaining: 0, timeoutInstance: 0 });
  }

  return (
    <div className="border-b pb-2">
      <h2 className="font-medium text-lg uppercase mb-2">Timer</h2>
      <div className="grid grid-flow-col gap-2">
        <button
          onClick={() => startTimer(25)}
          className="p0 bg-neutral-600 rounded text-sm uppercase font-medium"
        >
          0:25
        </button>
        <button
          onClick={() => startTimer(90)}
          className="p-1 bg-neutral-600 rounded text-sm uppercase font-medium"
        >
          1:30
        </button>
        <button
          onClick={() => startTimer(180)}
          className="p-1 bg-neutral-600 rounded text-sm uppercase font-medium"
        >
          3:00
        </button>
      </div>
      <button
        onClick={stopTimer}
        className="mt-2 w-full bg-red-700/80 hover:bg-red-700/90 active:bg-red-700 py-1 p-2 rounded text-white text-sm uppercase font-medium"
      >
        Stop/Reset
      </button>
      <p className="text-3xl text-center py-4">
        {secondsToMinutes(state.timeRemaining)}
      </p>
    </div>
  );
}
