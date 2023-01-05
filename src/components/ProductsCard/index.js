import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'
import { Link } from 'react-router-dom'

const ProductsCard = ({name, price_in_cents}) => {
    return (
        <Container>
            <Link to='/product'>
                <div className='product'>
                    <img src={ Apontador } className='slide first' alt='Apontador Tilibra'/>
                    <div className='info'>
                        <div className='name'> {`${name}`} </div>
                        <p>R$ {`${price_in_cents/100}`}</p>
                    </div>
                </div>
                
            </Link>
        </Container>
    )
}

export default ProductsCard