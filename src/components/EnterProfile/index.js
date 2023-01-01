import { Container } from './styles.js'
import PlaceholderProfilePic from '../../assets/placeholder_profile_pic.png'
import { Link } from 'react-router-dom'

const EnterProfile = () => {
    return(
        <Container>
            {/* <ul>
                <li>
                    <th>
                        <Link to='/login'>Entrar</Link>
                    </th>
                    <th>
                        <Link to='/register'>Criar conta</Link>
                    </th>
                </li>
            </ul> */}
            <div class="quick_profile">
                <Link to="/profile">
                    <ul>
                        <li>
                            <th>
                                <img src={PlaceholderProfilePic} alt='foto de perfil vazia'/>
                            </th>
                        </li>
                        <li>
                            <th>
                                <b>Bem vindo, Bernardo</b>
                            </th>
                        </li>
                    </ul>
                </Link>
            </div>
        </Container>
    )
}

export default EnterProfile