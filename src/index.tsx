import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { StateProvider, reducer } from "./state";

render(
  <StateProvider reducer={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.querySelector("#root")
);