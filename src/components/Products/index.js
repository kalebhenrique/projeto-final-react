import ProductsCard from '../ProductsCard/index.js'
import { Container } from './styles.js'

const Products = () => {
    return (
        <Container>
            <p>Buscar por: Materiais</p>
            <div>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
            </div>
        </Container>
    )
}

export default Products