import { Container } from './styles.js'
import Options from '../Options/index.js'
import Perfil_sem_foto from '../../assets/Perfil_sem_foto.webp'

const Data = () => {
    return(
        <Container>
           <img src={Perfil_sem_foto} alt='perfil sem foto'/>
           <div><input class='name' type="search" placeholder='Nome do perfil'/></div>
           <input class='info' type="search" placeholder='Informações do usuário'/>
           <h3>Editar perfil</h3>
           <Options/>
        </Container>
    )
}

export default Data