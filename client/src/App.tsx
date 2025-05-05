import { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/assets/images/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="/assets/images/react.svg"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>APPointments</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
