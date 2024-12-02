import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/Navbar';
import RouterConfig from './config/RouterConfig';
import Container from '@mui/material/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div>
      <Container fixed>
        <Navbar />
        <RouterConfig />
      </Container>
    <ToastContainer position='top-right' autoClose={2000 }/>
    </div>
  );
}

export default App
