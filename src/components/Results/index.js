import ProductsCard from "../ProductsCard/index.js"
import { Container } from './styles.js'

const Results = () => {
    return(
        <Container>
            <div>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
                <ProductsCard/>
            </div>
            <div id='name'>
                <h1>Apontador</h1>
                <h1>Apontador</h1>
                <h1>Apontador</h1>
                <h1>Apontador</h1>
                <h1>Apontador</h1>
                <h1>Apontador</h1>
            </div>
            <div id='price'>
                <h2>5 reais</h2>
                <h2>5 reais</h2>
                <h2>5 reais</h2>
                <h2>5 reais</h2>
                <h2>5 reais</h2>
                <h2>5 reais</h2>
            </div>
        </Container>
    )
}

export default Results