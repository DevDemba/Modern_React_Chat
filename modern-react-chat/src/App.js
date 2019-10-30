import React from 'react';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Modern Chat</h1>
      </header>
      <div className="App-center">
        <Chat/>
      </div>
    </div>
  );
}

export default App;
