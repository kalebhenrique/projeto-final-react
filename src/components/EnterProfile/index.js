import { Container } from './styles.js'
import PlaceholderProfilePic from '../../assets/placeholder_profile_pic.png'

const EnterProfile = () => {
    return(
        <Container>
            <ul>
                <li>
                    <th>
                        <a href='/login'>Entrar</a>
                    </th>
                    <th>
                        <a href='/register'>Criar conta</a>
                    </th>
                </li>
            </ul>
            {/* <div class="quick_profile">
                <a href="">
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
                    </a>
                </div> */}
        </Container>
    )
}

export default EnterProfile