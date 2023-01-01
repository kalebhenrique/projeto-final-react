import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'
import { Link } from 'react-router-dom'

const ProductsCard = () => {
    return (
        <Container>
            <Link to='/product'>
                <div class='product'>
                    <img src={ Apontador } class='slide first' alt='Apontador Tilibra'/>
                    <div class='info'>
                        Apontador<br/>
                        R$ 1,99
                    </div>
                </div>
                
            </Link>
        </Container>
    )
}

export default ProductsCard