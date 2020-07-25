import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enjoy <code>B. LEUNG</code> and enjoy the weekend.
        </p>
        <a
          className="App-link"
          href="http://www.bryan-leung.com.hk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to My Homepage
        </a>
      </header>
    </div>
  );
}

export default App;
