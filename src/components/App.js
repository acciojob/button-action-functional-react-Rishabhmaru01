import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {

    const [click, setClick] = useState(false)

  return (
    <div id="main">
        <button id='click' onClick={()=>setClick(true)}>Click Me</button>

        {click && (
          <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        )}
    </div>
  );
}


export default App;
