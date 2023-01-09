import { Container } from './styles.js'

const Cart = () => {
    return (
        <Container>
            <h1>Seus itens:</h1>
            <div className='product_box'>
                <div className='image_box'>
                  <img src=''/>
                </div>
                <div>
                  <div className='name_box'>
                    Apontador<br/>
                  </div>
                  <div className="quantity_box">
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
                <div className='price_box'>
                    <p>R$1,99</p>
                </div>
            </div>
            <div className='total__container'> 
                <div className='totalprice_box'>
                    <p>Subtotal (1 item): R$1,99</p> 
                </div>
                <button type='button'>Efetuar compra</button>
            </div>
        </Container>
    )
}

export default Cart