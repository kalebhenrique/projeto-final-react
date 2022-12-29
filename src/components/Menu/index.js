import { Container } from './styles.js'
import Input from '../Input/index.js'

const Menu = () => {
    return(
        <Container>
            <Input/>
            <table>
                <tr>
                    <th><a href="#">Todos</a></th>
                    <th><a href="#">Materiais</a></th>
                    <th><a href="#">Cadernos</a></th>
                    <th><a href="#">Mochilas</a></th>
                </tr>
            </table>              
        </Container>
    )
}

export default Menu