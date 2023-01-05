import ProductsCard from "../ProductsCard/index.js"
import { Container } from './styles.js'

const Results = ({products}) => {
    return(
        <Container>
            {products.map((item, index) => (
                <ProductsCard 
                key={index} 
                name={item.name} 
                price_in_cents={item.price_in_cents}/>
            ))}
        </Container>
    )
}

export default Results