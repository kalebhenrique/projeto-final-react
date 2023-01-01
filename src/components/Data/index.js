import { Container } from './styles.js'
import Options from '../Options/index.js'
import PlaceholderProfilePic from '../../assets/placeholder_profile_pic.png'
import EditPencil from '../../assets/edit_pencil.png'
import { Link } from 'react-router-dom'

const Data = () => {
    return(
        <Container>
            <div>
                <Link to=''>
                    <img src={ PlaceholderProfilePic } class='profile_pic' alt='perfil sem foto'/>
                </Link>
                <div class='info'>
                    <div class='column'>
                        <h2>Bernardo Braga</h2>
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

export default Data