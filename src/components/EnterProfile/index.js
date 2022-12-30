import { Container } from './styles.js'
import PlaceholderProfilePic from '../../assets/placeholder_profile_pic.png'

const EnterProfile = () => {
    return(
        <Container>
            {/* <ul>
                <li>
                    <th>
                        <a href='#'>Entrar</a>
                    </th>
                    <th>
                        <a href='#'>Criar conta</a>
                    </th>
                </li>
            </ul> */}
            <div class="quick_profile">
                <a href="">
                        <ul>
                            <li>
                                <th>
                                    <img src={PlaceholderProfilePic} alt='foto de perfil vazia'/>
                                </th>
                            </li>
                            <li>
                                <th>
                                    Bem vindo, Bernardo
                                </th>
                            </li>
                        </ul>
                    </a>
                </div>
        </Container>
    )
}

export default EnterProfile