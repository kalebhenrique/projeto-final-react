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
                        <th><Link to="/">Todos</Link></th>
                        <th><Link to="/category">Materiais</Link></th>
                        <th><Link to="/category">Cadernos</Link></th>
                        <th><Link to="/category">Mochilas</Link></th>
                    </li>
                </ul> 
            </div>             
        </Container>
    )
}

export default Menu