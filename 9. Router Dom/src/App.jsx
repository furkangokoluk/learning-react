import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import AboutCompany from './pages/AboutCompany'
import AboutEmployee from './pages/AboutEmployee'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

function App() {

  return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/about' element={<About/>}>
            <Route path='employee' element={<AboutEmployee/>}/>
            <Route path='company' element={<AboutCompany/>}/>
          </Route>

          <Route path='/products' element={<Products/>}/>
          <Route path='/product-details/:id' element={<ProductDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </div>
  )
}

export default App
