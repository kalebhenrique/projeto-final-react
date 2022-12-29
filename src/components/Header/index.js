import { Container } from './styles.js'
import Logo from '../../assets/logo.png'
import Carrinho from '../../assets/Carrinho.png'
import Menu from '../Menu/index.js'
import EnterProfile from '../EnterProfile/index.js'

const Header = () => {
    return(
        <Container>
            <div class='logo'>
                <a href='#'>
                    <img src={Logo} alt='logo site'/>
                </a>
            </div>
            <Menu/>
            <div class='cart'>
                <a href="">
                    <img src={Carrinho} alt='carrinho'/>
                </a>
                <b>0</b><br/>
                Carrinho
            </div>
            <EnterProfile/>
        </Container>
    )
}

export default Header