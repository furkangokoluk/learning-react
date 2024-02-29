// Bir statein değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir.  

import { useState } from 'react';
import './App.css';


function App() {
  const [firstName, setFirstName] = useState("Furkan");

  const [lastname, setLastName] = useState("Gökoluk");

  const handleChange = () => { setFirstName("Ayşe Nur"); }

  const [names, setNames] = useState(["Furkan", "Şeyma Nur", "Abdullah", "Kardelen"]);

  const [count, setCount] = useState(0);

  console.log("Component Render Edildi..");

  return (
    <>
      <div className='container'>

        <div>
          {firstName} {lastname}
        </div>
        <div>
          <button onClick={handleChange}>İsmi Değiştir</button>
          <button onClick={() => { setLastName("Semerci") }}>Soyismi Değiştir</button>
        </div>

        <div>
          {names.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>

        <div>
          <div>{count}</div>
          <button onClick={() => { setCount(count + 1); }}>Arttır</button>
        </div>

      </div>
    </>
  )
}

export default App
