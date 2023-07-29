import React from "react";
type Count = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Add = ({ setCount, count }: Count) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Add;
