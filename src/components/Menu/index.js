import { Container } from './styles.js'
import Input from '../Input/index.js'
import { Link } from 'react-router-dom'

const Menu = () => {
    return(
        <Container>
            <Input/>
            <div class="menu">
                <ul>
                    <li>
                        <th><Link to="/login">Todos</Link></th>
                        <th><Link to="/login">Materiais</Link></th>
                        <th><Link to="/login">Cadernos</Link></th>
                        <th><Link to="/login">Mochilas</Link></th>
                    </li>
                </ul> 
            </div>             
        </Container>
    )
}

export default Menu