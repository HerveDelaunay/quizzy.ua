import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="./logo.svg" alt="" />
      <p className='hello'>Hello from Ukraine 👋🏻</p>
      <p className='intro'>Quizzy is a website with small games for learning Ukrainian. Make learning awesome!</p>
      <form action="submit">
        <button className='start_button'>Start here</button>
      </form>
    </div>
  );
}

export default App;
