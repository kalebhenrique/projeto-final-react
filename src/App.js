import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './global.css'
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <MyRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
