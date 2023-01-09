import { Container } from './styles.js'
import Options from '../../components/Options/index.js'
import PlaceholderProfilePic from '../../assets/placeholder_profile_pic.png'
import EditPencil from '../../assets/edit_pencil.png'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    return(
        <Container>
            <div>
                <Link to=''>
                    <img src={ PlaceholderProfilePic } className='profile_pic' alt='perfil sem foto'/>
                </Link>
                <div className='info'>
                    <div className='column'>
                        <h2>Bernardo Braga</h2>
                        <Link to='/logout' className='logout'>Sair</Link>
                        <Link to='/admin' className='admin_space'>Espaço do Administrador</Link>
                    </div> 
                    <button> 
                        <img src={ EditPencil } alt='editar nome'/> 
                    </button>
                </div>          
            </div>
            <Options/>   
        </Container>
    )
}

export default ProfilePage