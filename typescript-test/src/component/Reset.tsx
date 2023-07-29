import React from "react";
type Count = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const Reset = ({ setCount }: Count) => {
  return (
    <div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Reset;
