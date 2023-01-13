import { useState } from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminProductsCreate = () => {

    const [name, setName] = useState('');
    const [price_in_cents, setPriceInCents] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [inventory, setInventory] = useState('');

    const createProduct = async (e) => {
        e.preventDefault();
        if (name && price_in_cents && description && category_id && brand_id && inventory) {
            await api.post('/products/create', {
            name,
            description,
            inventory,
            price_in_cents,
            category_id,
            brand_id
        })
        alert('Produto criado com sucesso!')
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <FormBox>
            <Link to='/adminproducts'>&#60;&#60; Voltar</Link>
            <h1>Criar Produto</h1>
            <form onSubmit={createProduct}>
                    <input placeholder="Nome" onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="Descrição" onChange={(e) => setDescription(e.target.value)}></input>
                    <input placeholder="Estoque" onChange={(e) => setInventory(e.target.value)}></input>
                    <input placeholder="Preço" onChange={(e) => setPriceInCents(e.target.value)}></input>
                    <input placeholder="Categoria" onChange={(e) => setCategoryId(e.target.value)}></input>
                    <input placeholder="Marca" onChange={(e) => setBrandId(e.target.value)}></input>
                    <button type="submit">Criar</button>
            </form>
        </FormBox>
    )

}

export default AdminProductsCreate;