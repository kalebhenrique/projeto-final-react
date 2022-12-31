import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'

export const ProductInfo = () => {
  return (
        <Container>
          <div class='image_box'>
            <img src={ Apontador }/>
          </div>
          <div>
            <div class='name_box'>
              Apontador<br/>
              <b>R$ 1,99</b>
            </div>
            <div class='description_box'>
              Apontador Amarelo Tilibra
            </div>
            <div class="quantity_box">
              <label for="product">Quantidade:</label>
              <select name="product">
                <option value="1" selected> 1 </option>
                <option value="2"> 2 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
              </select>      
            </div>  
            <button type='button'>Adicionar ao carrinho</button>
          </div>
          
        </Container>
  )
}

export default ProductInfo