import { Container } from './styles.js'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Logo from '../../assets/logo.png'

const ProductsCard = ({idProduct, name, price_in_cents, images_url}) => {
    return (
        <Container>
            <Link to={`/product/${idProduct}`}>
                <div className='product'>
                    <LazyLoadImage
                    src={`http://localhost:3001/${images_url}`}
                    className='slide first'
                    effect='blur'
                    placeholderSrc={ Logo }/>
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