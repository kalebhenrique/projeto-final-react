import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import { UserProvider } from './contexts/useUserContext';
import './global.css'
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <MyRoutes/>
        <Footer/>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
