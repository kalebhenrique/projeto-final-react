import { useParams } from "react-router-dom"
import Results from "../../components/Results/index.js"
import { Container } from "./styles.js"

const CategoryPage = () => {
    const {id} = useParams()
    console.log(id)
    let categoryName = 'Materiais'
    const products = [
        {
            'id': 1,
            'name': 'Caneta azul',
            'price_in_cents': 199
        },
        {
            'id': 2,
            'name': 'Caneta azul',
            'price_in_cents': 199
        },
        {
            'id': 3,
            'name': 'Caneta azul',
            'price_in_cents': 199
        },
        {
            'id': 4,
            'name': 'Caneta azul',
            'price_in_cents': 199
        },
        {
            'id': 5,
            'name': 'Caneta azul',
            'price_in_cents': 199
        },
        {
            'id': 5,
            'name': 'Caneta azul',
            'price_in_cents': 199
        }
    ]

    return(
        <Container>
            <p>Resultados para: {categoryName}</p>
            <div>
                <Results products={products}/>
            </div>         
        </Container>
    )
}

export default CategoryPage