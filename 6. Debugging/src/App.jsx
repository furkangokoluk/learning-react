import { useState } from 'react';
import './App.css';

function App() {

  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const findAverage = () => {
    debugger;
    const result = sum() / 2;
    print(result);
  }

  const sum = () => {
    debugger;
    return vize1 + vize2;
  }

  const print = (result) => {
    console.log("Ortalama : " + result);
  }

  return (
    <>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={findAverage}>Ortalama Bul</button>
      </div>
    </>
  )
}

export default App
