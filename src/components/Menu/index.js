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
                        <span><Link to="/">Todos</Link></span>
                        <span><Link to="/category/1">Materiais</Link></span>
                        <span><Link to="/category/2">Cadernos</Link></span>
                        <span><Link to="/category/3">Mochilas</Link></span>
                    </li>
                </ul> 
            </div>             
        </Container>
    )
}

export default Menu