import { Container } from './styles.js'
import Cadeado from '../../assets/Cadeado.png'
import Cartão from '../../assets/Cartão.png'
import Endereço from '../../assets/Endereço.png'
import { Link } from 'react-router-dom'

const Options = () => {
    return(
        <Container>
            <Link to=''>
                <div class='security'>
                    <img src={Cadeado} alt='cadeado'/>
                    <h1><font size='+2'>Segurança</font><br/>Configure a segurança da sua conta.</h1>
                </div>
            </Link>
            
            <Link to=''>
                <div class='payment'>
                    <img src={Cartão} alt='cartao'/>
                    <h1><font size='+2'>Pagamento</font><br/>Configure seus métodos de pagamento.</h1>
                </div>  
            </Link>

            <Link to=''>
                <div class='adress'>
                    <img src={Endereço} alt='endereco'/>
                    <h1><font size='+2'>Endereço</font><br/>Configure seu endereço.</h1>
                </div>
            </Link>
        </Container>
    )
}

export default Options