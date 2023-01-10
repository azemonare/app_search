import './App.css';
function add(){
  const v = document.getElementById("i");
  const d=parseInt(v.textContent)+1;
  v.textContent=d;
}

function rm(){
  const v = document.getElementById("i");
  const d=parseInt(v.textContent)-1;
  v.textContent=d;
}

function App() {
  return (
    <>
    <p id="i">0</p>
    <button onClick={add}>+</button>
    <button onClick={rm}>-</button>
    </>
  );
}

export default App;
