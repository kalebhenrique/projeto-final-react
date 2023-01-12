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
import AdminUsersIndex from '../pages/admin_users/index/index.js'
import AdminBrandsIndex from '../pages/admin_brands/index/index.js'
import AdminProductsAddImages from '../pages/admin_products/add_images/index.js'
import AdminCategoriesIndex from '../pages/admin_categories/index/index.js'
import AdminCategoriesCreate from '../pages/admin_categories/create/index.js'
import AdminCategoriesUpdate from '../pages/admin_categories/update/index.js'
import AdminBrandsCreate from '../pages/admin_brands/create/index.js'
import AdminBrandsUpdate from '../pages/admin_brands/update/index.js'
import { AdminPages } from '../pages/admin_pages.js'

const MyRoutes = () => {
    return(
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/register' element={<RegisterPage/>} />
                <Route path='/' element={<LayoutNavbar/>} >
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/category/:id' element={<CategoryPage/>} />
                    <Route path='/product/:id' element={<ProductPage/>} />
                    <Route path='/profile' element={<ProfilePage/>} />
                    <Route path='/aboutus' element={<AboutUsPage/>} />
                    <Route path='/cart' element={<CartPage/>} />
                    <Route path='*' element={<NotFound/> } />
                </Route>
                <Route path='/' element={<AdminPages/>} >
                    <Route path='/admincategories' element={<AdminCategoriesIndex/>} />
                    <Route path='/admincategories/create' element={<AdminCategoriesCreate/>} />
                    <Route path='/admincategories/update/:id' element={<AdminCategoriesUpdate/>} />
                    <Route path='/adminbrands' element={<AdminBrandsIndex/>} />
                    <Route path='/adminbrands/create' element={<AdminBrandsCreate/>} />
                    <Route path='/adminbrands/update/:id' element={<AdminBrandsUpdate/>} />
                    <Route path='/adminproducts' element={<AdminProductsIndex/>} />
                    <Route path='/adminproducts/create' element={<AdminProductsCreate/>} />
                    <Route path='/adminproducts/update/:id' element={<AdminProductsUpdate/>} />
                    <Route path='/adminproducts/add_images/:id' element={<AdminProductsAddImages/> } />
                    <Route path='/adminusers' element={<AdminUsersIndex/>} />
                </Route>
            </Routes>
    )
}

export default MyRoutes