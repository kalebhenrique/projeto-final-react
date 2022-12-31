import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'
import { Link } from 'react-router-dom'

const ProductsCard = () => {
    return (
        <Container>
            <Link to='/productinfo'>
                <div>
                    <img src={ Apontador } class='slide first' alt='Apontador Tilibra'/>
                </div>
            </Link>
        </Container>
    )
}

export default ProductsCard