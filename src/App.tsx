import React, { FC } from 'react';
import { Counter } from "./components/Counter";
import { SeperateComponent } from "./components/SeperateComponent";

const App: FC = () => {
  return (
    <>
      <Counter />
      <SeperateComponent />
    </>
  );
};

export default App;
