import './App.css';
import { useState } from 'react';



function App() {
  const [num, setnum] = useState(0);
  return (
    <>
    <p className='App-logo' id="i">{num}</p>
    <button onClick={() => setnum(num+1)}>+</button>
    <button onClick={() => setnum(num-1)}>-</button>
    </>
  );
}

export default App;
