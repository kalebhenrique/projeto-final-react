import { Container } from './styles.js'
import PlaceholderProfilePic from '../../assets/placeholder_profile_pic.png'
import { Link } from 'react-router-dom'

const EnterProfile = () => {
    return(
        <Container>
            {/* <ul>
                <li>
                    <div>
                        <Link to='/login'>Entrar</Link>
                    </div>
                    <div>
                        <Link to='/register'>Criar conta</Link>
                    </div>
                </li>
            </ul> */}
            <div className="quick_profile">
                <Link to="/profile">
                    <ul>
                        <li>
                            <div>
                                <img src={PlaceholderProfilePic} alt='foto de perfil vazia'/>
                            </div>
                        </li>
                        <li>
                            <div>
                                <b>Bem vindo, Bernardo</b>
                            </div>
                        </li>
                    </ul>
                </Link>
            </div>
        </Container>
    )
}

export default EnterProfile