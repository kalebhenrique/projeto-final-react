import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/index.js'
import CategoryPage from '../pages/category/index.js'
import LoginPage from '../pages/login/index.js'
import RegisterPage from '../pages/register/index.js'
import ProfilePage from '../pages/profile/index.js'
import { LayoutNavbar } from '../pages/layout_navbar.js'
import ProductInfo from '../components/ProductInfo/index.js'
import AboutUsPage from '../pages/about_us/index.js'

const MyRoutes = () => {
    return(
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/' element={<LayoutNavbar/>} >
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/category' element={<CategoryPage/>} />
                    <Route path='/product' element={<ProductInfo/>} />
                    <Route path='/profile' element={<ProfilePage/>} />
                    <Route path='/aboutus' element={<AboutUsPage/>} />
                </Route>
            </Routes>
    )
}

export default MyRoutes