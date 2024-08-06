import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux Counter</h1>
        <p>{count}</p>
        <button style={{margin:"10px 0"}} onClick={() => dispatch(increment())}>Increment</button>
        <button style={{margin:"10px 0"}} onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
