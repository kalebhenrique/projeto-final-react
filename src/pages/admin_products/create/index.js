import { useState } from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminProductsCreate = () => {

    const [name, setName] = useState('');
    const [priceInCents, setPriceInCents] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [inventory, setInventory] = useState('');

    const createProduct = async (e) => {
        e.preventDefault();
        if (name && priceInCents && description && category_id && brand_id && inventory) {
            await api.post('products/create', {
            name,
            priceInCents,
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
            <Link to='/admin_products'>&#60;&#60; Voltar</Link>
            <h1>Criar Produto</h1>
            
            <form onSubmit={createProduct}>
                    <input placeholder="Nome" onChange={(event) => setName(event.target.value)}></input>
                    <input placeholder="Preço" onChange={(event) => setPriceInCents(event.target.value)}></input>
                    <input placeholder="Descrição" onChange={(event) => setDescription(event.target.value)}></input>
                    <input placeholder="Categoria" onChange={(event) => setCategoryId(event.target.value)}></input>
                    <input placeholder="Marca" onChange={(event) => setBrandId(event.target.value)}></input>
                    <input placeholder="Estoque" onChange={(event) => setInventory(event.target.value)}></input>
                    <button type="submit">Criar</button>
            </form>
        </FormBox>
    )

}

export default AdminProductsCreate;