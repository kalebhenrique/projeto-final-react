import { Container } from './styles.js'
import Logo from '../../assets/logo.png'
import Carrinho from '../../assets/Carrinho.png'
import Menu from '../Menu/index.js'
import EnterProfile from '../EnterProfile/index.js'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <Container>
            <div className='logo'>
                <Link to='/'>
                    <img src={Logo} alt='logo site'/>
                </Link>
            </div>
            <Menu/>
            <Link to="/cart">
                <div className='cart'>
                    
                        <img src={Carrinho} alt='carrinho'/>
                    <b>0</b><br/>
                    Carrinho
                </div>    
            </Link>
            <EnterProfile/>
        </Container>
    )
}

export default Header