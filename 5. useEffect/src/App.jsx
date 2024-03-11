import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  useEffect(() => {
    console.log("Her Zaman Çalışır.");
  })

  useEffect(() => {
    console.log("İlk Render Edildiğinde Çalışır.");
  }, [])

  useEffect(() => {
    console.log("İlk Render Edildiğinde ve FİRSTNAME State Değeri Değiştiğinde Çalışır.");
  }, [firstName])

  useEffect(() => {
    console.log("İlk Render Edildiğinde ve LASTNAME State Değeri Değiştiğinde Çalışır.");
  }, [lastname])

  useEffect(() => {
    console.log("İlk Render Edildiğinde ve FİRSTNAME yada LASTNAME State Değeri Değiştiğinde Çalışır.");
  }, [firstName,lastname])

  return (
    <>
      <div className='container'>
        <button onClick={() => setFirstName("Furkan")}>İsmi Değiştir</button>
        <button onClick={() => setLastName("Gökoluk")}>Soyismi Değiştir</button>
      </div>
    </>
  )
}

export default App
