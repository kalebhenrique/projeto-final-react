import ProductsList from "../../components/ProductsList/index.js"
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

const Homepage = () => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        api.get('/products/index').then(response => setProducts(response.data))
    }, [])

    return(
        <>
            <ProductsList products={products}/>
            <ProductsList products={products}/>
            <ProductsList products={products}/>
        </>
    )
}

export default Homepage