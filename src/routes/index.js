import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/index.js'
import CategoryPage from '../pages/category/index.js'
import LoginPage from '../pages/login/index.js'
import RegisterPage from '../pages/register/index.js'
import ProfilePage from '../pages/profile/index.js'
import { LayoutNavbar } from '../pages/layout_navbar.js'
import AboutUsPage from '../pages/about_us/index.js'
import CartPage from '../pages/cart/index.js'
import NotFound from '../pages/not_found/index.js'
import ProductPage from '../pages/product/index.js'
import AdminProductsIndex from '../pages/admin_products/index/index.js'
import AdminProductsCreate from '../pages/admin_products/create/index.js'
import AdminProductsUpdate from '../pages/admin_products/update/index.js'

const MyRoutes = () => {
    return(
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/admin_products' element={<AdminProductsIndex/>} />
                <Route path='/admin_products/create' element={<AdminProductsCreate/>} />
                <Route path='/admin_products/update/:id' element={<AdminProductsUpdate/>} />
                <Route path='/' element={<LayoutNavbar/>} >
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/category/:id' element={<CategoryPage/>} />
                    <Route path='/product/:id' element={<ProductPage/>} />
                    <Route path='/profile' element={<ProfilePage/>} />
                    <Route path='/aboutus' element={<AboutUsPage/>} />
                    <Route path='/cart' element={<CartPage/>} />
                    <Route path='*' element={<NotFound/> } />
                </Route>
            </Routes>
    )
}

export default MyRoutes