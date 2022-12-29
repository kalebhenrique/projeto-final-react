import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './global.css'
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MyRoutes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
