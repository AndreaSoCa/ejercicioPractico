import React from 'react'
import './App.css';

function App() {
  // must use a hook

  return (
    <div className='container my-5'>
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1>Counter App</h1>
          <div className='my-5'>
            <h2 className='my-5'>{count}</h2>
            <button 
              className='btn bt-success mx-3' 
              onClick={() => null} // add an event function
            >
              Increment
            </button>
            <button className='btn bt-danger mx-3' 
              onClick={() => null} // add an event function
            >
              Decrement
            </button>
            <button className='btn bt-secondary mx-3' 
              onClick={() => null} // add an event function
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;