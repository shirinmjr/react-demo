import { useState } from "react";

export const CounterButton = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  return (
    <>
      <p> You have clicked the button {numberOfClicks} times.</p>
      <label>
        Incremented by:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        ></input>
      </label>
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click
      </button>
    </>
  );
};
