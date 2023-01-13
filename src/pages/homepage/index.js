import { useState, useEffect } from 'react';
import ProductsCard from '../../components/ProductsCard';
import { api } from '../../services/api';
import { Container } from './styles';

const Homepage = () => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        api.get('/products/index').then(response => setProducts(response.data))
    }, [])

    return(
        <Container>
            <p>Todos os produtos</p>
            <div className='products_list'>
                {products.map((item, index) => (
                    <ProductsCard
                    key={index} 
                    name={item.name}
                    idProduct={item.id}
                    price_in_cents={item.price_in_cents}
                    images_url={item.images_url}/>
                ))}
            </div>
        </Container>
    )
}

export default Homepage