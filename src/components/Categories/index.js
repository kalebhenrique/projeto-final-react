import Results from '../Results/index.js'
import { Container } from './styles.js'

const Categories = () => {
    return(
        <Container>
            <p>Resultados para: materiais</p>
            <div>
                <Results/>
                <Results/>
                <Results/> 
            </div>
            
        </Container>
    )
}

export default Categories