import { useState } from "react";

const HelloReact = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCounter((preState) => preState +1)}>
        {counter}
      </button>
    </div>
  );
};

export default HelloReact;
