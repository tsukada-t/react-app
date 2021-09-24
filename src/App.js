import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>count: {count}</p>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinus}>-1</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <Counter></Counter>
    </>
  );
};
export default App;
