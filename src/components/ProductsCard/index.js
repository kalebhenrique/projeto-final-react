import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'
import { Link } from 'react-router-dom'

const ProductsCard = ({idProduct, name, price_in_cents}) => {
    const id = '/product/'

    return (
        <Container>
            <Link to={ id + idProduct }>
                <div className='product'>
                    <img src={ Apontador } className='slide first' alt='Apontador Tilibra'/>
                    <div className='info'>
                        <div className='name'> {`${name}`} </div>
                        <p>
                            {`${(price_in_cents/100)
                                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                        </p>
                    </div>
                </div>
                
            </Link>
        </Container>
    )
}

export default ProductsCard