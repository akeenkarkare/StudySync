import React from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>StudySync</h1>
        <p>
          Test For Study Widget
        </p>
        <ProgressBar current={50} goal={124} />
      </header>
    </div>
  );
}

export default App;
