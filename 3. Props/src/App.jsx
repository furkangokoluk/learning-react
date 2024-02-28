import Container from './Container'
import Products from './Products'

function App() {

  const productName = "Komidin"

  return (
    <>
      <Container>
        <Products productName="Masa" price={4500} />
        <hr />
        <Products productName="Sandalye" price={3200} />
        <hr />
        <Products productName={productName} price={2300} />
      </Container>

    </>
  )
}

export default App