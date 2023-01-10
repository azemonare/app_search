import './App.css';
import { useState } from 'react';
function pas(l) {
  if(l.length < 4){
    return <p>pass is under 4</p>
  }
}
function App() {
  const [passs, setpass] = useState("");
  return (
    <>
    <input type="password" value={passs} onChange={(e) => setpass(e.target.value)} />
    {/* { passs.length >4 ? "hgv":"" } */}
    {pas(passs)}
    </>
    
  );
}

export default App;
