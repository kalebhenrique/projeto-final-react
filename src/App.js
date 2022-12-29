import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
// import ProductsCard from './components/ProductsCard';
// import Products from './components/Products';
import './global.css'
// import Products from './pages/product_page';
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
