import { Container } from './styles.js'
import Logo from '../../assets/logo.png'
import Carrinho from '../../assets/Carrinho.png'
import Menu from '../Menu/index.js'
import EnterProfile from '../EnterProfile/index.js'

const Header = () => {
    return(
        <Container>
            <section class='logo'>
                <a href='#'>
                    <img src={Logo} alt='logo site'/>
                </a>
            </section>
            <Menu/>
            <section class='profile_space'>
                <table>
                    <tr>
                        <th>
                            <a href="">
                                <img src={Carrinho} alt='carrinho'/>
                            </a>
                        </th>
                        <th>0</th>
                    </tr>
                    <tr>
                        <td>Carrinho</td>
                    </tr>
                </table>
            </section>
            <EnterProfile/>
        </Container>
    )
}

export default Header