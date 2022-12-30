import { Container } from './styles.js'
import Logo from '../../assets/logo.png'
import Carrinho from '../../assets/Carrinho.png'
import Menu from '../Menu/index.js'
import EnterProfile from '../EnterProfile/index.js'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <Container>
            <div class='logo'>
                <Link to='#'>
                    <img src={Logo} alt='logo site'/>
                </Link>
            </div>
            <Menu/>
            <div class='cart'>
                <Link to="">
                    <img src={Carrinho} alt='carrinho'/>
                </Link>
                <b>0</b><br/>
                Carrinho
            </div>
            <EnterProfile/>
        </Container>
    )
}

export default Header