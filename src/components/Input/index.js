import { Container } from './styles.js'
import Lupa from '../../assets/Lupa.png'

const Input = () => {
    return(
        <Container>
            <input type="search" placeholder='Pesquisar' syze="50px"/>
            <button><img src={Lupa} alt='lupa'/></button>
        </Container>
    )
}

export default Input