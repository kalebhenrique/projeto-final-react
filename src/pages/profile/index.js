import { Container } from './styles.js'
import Options from '../../components/Options/index.js'
import EditPencil from '../../assets/edit_pencil.png'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/useUserContext.js'
import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'

const ProfilePage = () => {
    const { logout, user } = useUserContext()
    const id = user.id
    const [userData, setUserData] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect (() => {
        api.get(`/users/show/${id}`)
        .then(response => {
            setUserData(response.data)
            setLoading(false)
        })
      }, [id])

    return(
        <Container>
            <div>
                {loading && <p>Carregando...</p>}
                {!loading &&
                <Link to=''>
                    <img
                        src={`http://localhost:3001${userData.profile_picture_url}`} 
                        alt='foto de perfl'
                        className='profile_pic'/>
                </Link>
                }
                <div className='info'>
                    <div className='column'>
                        <h2>{userData.name}</h2>
                        <div className='logout' onClick={() => logout()}><Link to='/'>Sair</Link></div>
                        { userData.is_admin && 
                        <ul className="menu">
                            <li><p className='admin_space'>Espaço do Administrador</p>
                                <ul>
                                    <li><Link to='/adminproducts'>Produtos</Link></li>
                                    <li><Link to='/adminbrands'>Marcas</Link></li>
                                    <li><Link to='/admincategories'>Categorias</Link></li>
                                    <li><Link to='/adminusers'>Usuários</Link></li>
                                </ul>
                            </li>
                        </ul>
                        }
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