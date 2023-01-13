import Cart from '../../components/Cart/index.js'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Container } from './styles.js';
import { atom, useAtom } from 'jotai';
import { useUserContext } from '../../contexts/useUserContext';

const CartPage = () => {
    const { id } = useParams()
    const [carts, setCarts] = useState([])

    useEffect(() => {
        api.get(`carts/show/${id}`)
        .then(response => {
            setCarts(response.data)
            // console.log(response.data)
        }).catch(err => console.log(err))
    }, [id])
    
    console.log(carts)
    return(
        <Container>
            <h1>Seus itens:</h1>
            <div className='product_box'>
                {carts.length>0 && carts?.map((item, index) => (
                    <div>
                    <Cart
                    key={index} 
                    name={item.name}
                    idProduct={item.id}
                    price_in_cents={item.price_in_cents}
                    images_url={item.images_url}/>
                    </div>
                ))}
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

export default CartPage