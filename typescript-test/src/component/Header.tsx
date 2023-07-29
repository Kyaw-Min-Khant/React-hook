import React from "react";

type data = {
  name: string;
  age: number;
  address: string;
  isMarried: boolean;
};

const Header: React.FC<{ data: data }> = ({ data }) => {
  return (
    <div>
      <h2 style={{ color: "green" }}>Hello,I am</h2>
      <h2 className="">{data?.name}</h2>
    </div>
  );
};

export default Header;
