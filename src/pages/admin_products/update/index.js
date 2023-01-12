import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminProductsUpdate = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price_in_cents, setPriceInCents] = useState('');
    const [description, setDescription] = useState('');
    const [inventory, setInventory] = useState('');
    const [category_id, setCategory] = useState([]);
    const [brand_id, setBrand] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(`/products/show/${id}`)
        .then(response => {
            setName(response.data.name)
            setPriceInCents(response.data.price_in_cents)
            setDescription(response.data.description)
            setInventory(response.data.inventory)
            setCategory(response.data.category.id)
            setBrand(response.data.brand.id)
            setLoading(false)
        })
    }, [id])

    const updateProduct = async () => {
        if (name && price_in_cents && description && category_id && brand_id && inventory) {
        await api.patch(`/products/update/${id}`, {
            name,
            price_in_cents,
            description,
            category_id,
            brand_id,
            inventory
        })
        alert('Produto criado com sucesso!')
        } else {
            alert('Preencha todos os campos!')
        }
    }
    return (
        <FormBox>
            <Link to='/adminproducts'>&#60;&#60; Voltar</Link>
            <h1>Atualizar Produto</h1>
            {loading ? <p>Carregando...</p> : (
            <form onSubmit={updateProduct}>
                <input value={name} placeholder="Nome" onChange={(products) => setName(products.target.value)}/>
                <input value={description} placeholder="Desscrição" onChange={(e) => setDescription(e.target.value)}></input>
                <input value={inventory} placeholder="Estoque" onChange={(e) => setInventory(e.target.value)}></input>
                <input value={price_in_cents} placeholder="Preço" onChange={(e) => setPriceInCents(e.target.value)}></input>
                <input value={category_id} placeholder="Categoria" onChange={(e) => setCategory(e.target.value)}></input>
                <input value={brand_id} placeholder="Marca" onChange={(e) => setBrand(e.target.value)}></input>
                <button type="submit">Atualizar</button>
            </form>
            )}
        </FormBox>
    );
    }

export default AdminProductsUpdate;