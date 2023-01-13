import { Container } from './styles.js'
import { Link } from 'react-router-dom'

const Cart = ({idProduct, name, price_in_cents, images_url}) => {
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
                <div className="custom-select" style="width:200px;">
                  <label for="product">Quantidade:</label>
                  <select name="product">
                    <option value="1" selected> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                  </select>
                </div>
            </div> 
          </Link>
        </Container>
    )
} 

export default Cart