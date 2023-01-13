import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import ProductInfo from "../../components/ProductInfo"

const ProductPage = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(`/products/show/${id}`)
        .then(response => {
            setProducts(response.data)
            setLoading(false)
        })
    }, [id])

    return(
        <>
            {loading && <p>Carregando...</p>}
            {!loading &&
            <ProductInfo
                name={products.name}
                price_in_cents={products.price_in_cents}
                description={products.description}
                category={products.category.name}
                brand={products.brand.name}
                images_url={products.images_url}/>
            }
        </>
    )
}

export default ProductPage