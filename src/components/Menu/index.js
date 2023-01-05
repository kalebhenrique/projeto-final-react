import { Container } from './styles.js'
import Input from '../Input/index.js'
import { Link } from 'react-router-dom'

const Menu = () => {
    return(
        <Container>
            <Input/>
            <div className="menu">
                <ul>
                    <li>
                        <th><Link to="/">Todos</Link></th>
                        <th><Link to="/category/1">Materiais</Link></th>
                        <th><Link to="/category/2">Cadernos</Link></th>
                        <th><Link to="/category/3">Mochilas</Link></th>
                    </li>
                </ul> 
            </div>             
        </Container>
    )
}

export default Menu