import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'

const ProductsCard = () => {
    return (
        <Container>
            <img src={ Apontador } class='slide first' alt='Apontador Tilibra'/>
        </Container>
    )
}

export default ProductsCard