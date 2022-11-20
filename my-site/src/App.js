import React from 'react';
import { useState } from 'react'
import './App.css';

function App() {
  const [ color, setColor ] = useState("red");
  return (
    <div>
      <h1 style={{color}}>Hello React</h1>
      <button onClick={()=>setColor((color)=>color==="red"?"yellow":"red")}> Change {color}</button>
    </div>
  );
}

export default App;
