import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/index.js'
import Products from '../pages/product/index.js'
import LoginPage from '../pages/login/index.js'
import RegisterPage from '../pages/register/index.js'
import ProfilePage from '../pages/profile/index.js'
import { LayoutNavbar } from '../pages/layout_navbar.js'

const MyRoutes = () => {
    return(
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/' element={<LayoutNavbar/>} >
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/products' element={<Products/>} />
                </Route>
            </Routes>
    )
}

export default MyRoutes