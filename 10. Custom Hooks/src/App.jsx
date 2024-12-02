import './App.css'
import useCopyToClipboard from './hooks/useCopyToClipboard'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {

  const { count, increase, decrease } = useCounter()
  const { open, change } = useToggle()
  const [copied, copy] = useCopyToClipboard("Pes etme çalış")

  return (
    <>
      <div style={{ margin: '50px' }}>
        <div>{count}</div>
        <div>
          <button onClick={increase}>Arttır</button>
          <button onClick={decrease}>Azalt</button>
        </div>

        <hr />

        <div style={{ marginTop: '50px' }}>
          {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}></div>}
          <div><button onClick={change}>{open ? "Gizle" : "Göster"}</button></div>
        </div>

        <hr />

        <div style={{ marginTop: '50px' }}>
          <div><button onClick={copy}>Kopyala</button></div>
          {copied && 'Kopyalandı!.'}
          <div><input type="text" placeholder='Yapıştır :)' /></div>
        </div>
      </div>
    </>
  )
}

export default App
