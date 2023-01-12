import { Container } from './styles.js'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../contexts/useUserContext.js'
import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const EnterProfile = () => {
    const { user } = useUserContext()
    const id = user.id
    const [userData, setUserData] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect (() => {
        api.get(`/users/show/${id}`).then(response => {
            setUserData(response.data)
            setLoading(false)
        })
      }, [id])

    return(
        <Container>
            {Object.keys(user).length ? (
            <div className="quick_profile">
                <Link to="/profile">
                    <ul>
                        <li>
                            {loading && <p>Carregando...</p>}
                            {!loading &&
                            <div>
                                <LazyLoadImage
                                src={`http://localhost:3001${userData.profile_picture_url}`} 
                                alt='foto de perfil'
                                effect='blur'/>
                            </div>
                        }
                        </li>
                        <li>
                            <div>
                                <b>Bem vindo, {userData.name}</b>
                            </div>
                        </li>
                    </ul>
                </Link>
            </div>) : (
            <ul>
                <li>
                    <div>
                        <Link to='/login'>Entrar</Link>
                        <Link to='/register'>Criar conta</Link>
                    </div>
                </li>
            </ul>
            )}
        </Container>
    )
}

export default EnterProfile