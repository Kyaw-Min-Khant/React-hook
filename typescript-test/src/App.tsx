import { useState } from "react";
import Header from "./component/Header";
import Count from "./component/Count";
import Add from "./component/Add";
import Minius from "./component/Minius";
import Reset from "./component/Reset";

const App = () => {
  const [count, setCount] = useState<number>(1);
  const data = {
    name: "Kyaw Min Khant",
    age: 20,
    address: "Bahan",
    isMarried: false,
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <Header data={data} />
      <Count count={count} />
      <div style={{ display: "flex", width: "500px" }} className="">
        <Add count={count} setCount={setCount} />
        <Minius minus={minus} />
        <Reset setCount={setCount}/>
      </div>
    </div>
  );
};

export default App;
