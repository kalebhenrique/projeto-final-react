import { Container } from './styles.js'
import Cadeado from '../../assets/Cadeado.png'
import Cartão from '../../assets/Cartão.png'
import Endereço from '../../assets/Endereço.png'
import Seta from '../../assets/Seta.png'

const Options = () => {
    return(
        <Container>
            <div class='line-1'></div>
            <img class='cadeado' src={Cadeado} alt='cadeado'/>
            <h1><font size='+2'>Segurança</font><br/>Configure a segurança da sua conta.</h1>
            <div class='line-2'></div>
            <img class='cartao' src={Cartão} alt='cartao'/>
            <h2><font size='+2'>Pagamento</font><br/>Configure seus métodos de pagamento.</h2>
            <div class='line-3'></div>
            <img class='endereco' src={Endereço} alt='endereco'/>
            <h3><font size='+2'>Endereço</font><br/>Configure seu endereço.</h3>
            <div class='line-4'></div>
            <img class='seta-1' src={Seta} alt='seta'/>
            <img class='seta-2' src={Seta} alt='seta'/>
            <img class='seta-3' src={Seta} alt='seta'/>
        </Container>
    )
}

export default Options