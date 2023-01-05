import ProductsCard from '../ProductsCard/index.js'
import { Container } from './styles.js'

const ProductsList = ({products}) => {
    return (
        <Container>
            <p>Buscar por: Materiais</p>
            <div>
                {products.map((item, index) => (
                    <ProductsCard 
                    key={index} 
                    name={item.name} 
                    price_in_cents={item.price_in_cents}/>
                ))}
            </div>
        </Container>
    )
}

export default ProductsList