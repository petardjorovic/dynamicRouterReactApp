import React from "react";

function CounterComponent({ stock, counter, setCounter }) {
  function decreaseCounter() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  function increaseCounter() {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }
  return (
    <div className="flex justify-center items-center self-center text-sm">
      <div
        className="h-[20px] border border-slate-600 bg-gray-500 cursor-pointer w-[20px] rounded-sm flex items-center justify-center select-none text-center"
        onClick={decreaseCounter}
      >
        -
      </div>
      <div className="h-[20px] border border-slate-600 bg-gray-500 w-[50px] flex items-center justify-center select-none rounded-sm">
        {counter}
      </div>
      <div
        className="h-[20px] border border-slate-600 bg-gray-500 cursor-pointer w-[20px] rounded-sm flex items-center justify-center select-none"
        onClick={increaseCounter}
      >
        +
      </div>
    </div>
  );
}

export default CounterComponent;
