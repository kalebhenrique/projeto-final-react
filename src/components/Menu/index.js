import { Container } from './styles.js'
import Input from '../Input/index.js'

const Menu = () => {
    return(
        <Container>
            <Input/>
            <div class="menu">
                <ul>
                    <li>
                        <th><a href="#">Todos</a></th>
                        <th><a href="#">Materiais</a></th>
                        <th><a href="#">Cadernos</a></th>
                        <th><a href="#">Mochilas</a></th>
                    </li>
                </ul> 
            </div>             
        </Container>
    )
}

export default Menu