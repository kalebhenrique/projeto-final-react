import { Container } from './styles.js'
import { Link } from 'react-router-dom'

const ProductsCard = ({idProduct, name, price_in_cents, images_url}) => {
    return (
        <Container>
            <Link to={`/product/${idProduct}`}>
                <div className='product'>
                    <img src={`http://localhost:3001/${images_url}`} className='slide first' alt='imagem do produto'/>
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