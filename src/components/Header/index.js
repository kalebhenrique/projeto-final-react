import { Container } from './styles.js'
import Logo from '../../assets/Logo.png'
import Carrinho from '../../assets/Carrinho.png'
import Menu from '../Menu/index.js'
import EnterProfile from '../EnterProfile/index.js'

const Header = () => {
    return(
        <Container>
            <section class='logo'>
                <table>
                    <tr>
                        <th>
                            <a href='#'>
                                <img src={Logo} alt='logo site'/>
                            </a>
                        </th>
                        <th>
                            <a href='#'>
                                Caneta<br></br><span style={{color: '#1C5D98',}}> azul</span>{' '}<br></br>materiais
                            </a>
                        </th>
                    </tr>
                </table>
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