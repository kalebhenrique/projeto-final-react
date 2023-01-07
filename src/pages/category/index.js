import { useParams } from "react-router-dom"
import { Container } from "./styles.js"
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import ProductsCard from "../../components/ProductsCard/index.js";

const CategoryPage = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        api.get(`/categories/show/${id}`)
        .then(response => {
            setCategoryName(response.data.name)
        })
    }, [id])

    useEffect(() => {
        api.get(`/products/index_by_category/${id}`)
        .then(response => {
            setProducts(response.data)
        })
    }, [id])

    return (
        <Container>
            <p>Buscar por: { categoryName }</p>
            <div class='results'>   
                {products.map((item, index) => (
                    <ProductsCard
                    key={index} 
                    name={item.name} 
                    price_in_cents={item.price_in_cents}
                    category={item.category}/>
                ))}
            </div>
        </Container>
    )
    
}

export default CategoryPage