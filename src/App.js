import './App.css';
import { useState } from 'react';
import data from "./data.json"

function pas(l) {
  if (data[l]) {
    return <ul className='B'>{data[l].map((i) => <li key={i} className='A'>{i}</li>)}</ul>
  }
  else {
    return <ul className='B'><li className='A'>not found !!</li><li className='A'>lin &lt;&gt; lam</li></ul>
  }
}


function App() {
  const [passs, setpass] = useState("");
  return (
    <>
    <input type="text" value={passs} onChange={(e) => setpass(e.target.value)} />
    {/* { passs.length >4 ? "hgv":"" } */}
    {
    passs != "" &&  pas(passs)}
    </>
    
  );
}

export default App;
