import React from "react";
interface Child {
  minus: () => void;
}
const Minius: React.FC<Child> = ({ minus }) => {
  return (
    <div>
      <button onClick={minus}>Minus</button>
    </div>
  );
};

export default Minius;
