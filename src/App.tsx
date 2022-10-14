import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

const App: FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo test_class" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo github actions CI-CD
      </a>
    </header>
  </div>
);

export default App;
