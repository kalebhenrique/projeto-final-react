import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/index.js'
import Products from '../pages/product_page/index.js'
import LoginPage from '../pages/login/index.js'
import RegisterPage from '../pages/register/index.js'

const MyRoutes = () => {
    return(
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/products' element={<Products/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
            </Routes>
    )
}

export default MyRoutes