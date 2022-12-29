import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage/index.js'
import Products from '../pages/product_page/index.js'

const MyRoutes = () => {
    return(
            <Routes>
                <Route path='/' element={<Homepage/>} />
                <Route path='/products' element={<Products/>} />
            </Routes>
    )
}

export default MyRoutes