const Count: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div>
      <h2 style={{ color: "red" }} className="">
        {count}
      </h2>
    </div>
  );
};

export default Count;
