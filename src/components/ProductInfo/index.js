import { Container } from './styles.js'
import Apontador from '../../assets/Apontador.jpg'

export const ProductInfo = (products) => {
  return (
        <Container>
            <div className='image_box'>
                <img src={ Apontador } alt='imagem do produto'/>
            </div>
            <div>
                <div className='name_box'>
                    {`${products.name}`}<br/>
                    <b>
                        {`${(products.price_in_cents/100)
                            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                    </b>
                </div>
                <div className='description_box'>
                    {`${products.description}`}<br/><br/>
                    Categoria: {`${products.category}`}<br/>
                    Marca: {`${products.brand}`}
                </div>
                <div className="quantity_box">
                    <label htmlFor="product">Quantidade:</label>
                    <select name="product">
                        <option defaultValue="1"> 1 </option>
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