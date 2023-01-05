import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'

const Cart = () => {
    return (
        <Container>
            <div className='carrinho__container'>
                <div className='tittle__container'>
                    <h1>Seus itens:</h1>
                </div>
                <div className='image_box'>
                    <img src={ Apontador }/>
                </div>
                <div className='product_container'>
                    <div className='name_box'>
                      Apontador<br/>
                    </div>
                    <div className='quantity_box'>
                      <label for="product">Quantidade:</label>
                      <select name="product">
                        <option value="1" selected> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                      </select>    
                    </div>
                    <h1>R$ 1,99</h1>    
                </div> 
                <div className='totalprice__container'>
                    <p>Subtotal (2 itens): R$1,99</p> 
                    <button type='button'>Efetuar compra</button>
                </div>
            </div>
        </Container>
    )
}

export default Cart