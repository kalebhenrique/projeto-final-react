import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminProductsUpdate = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [priceInCents, setPriceInCents] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [brand_id, setBrandId] = useState('');
    const [inventory, setInventory] = useState('');

    const updateProduct = async () => {
        if (name && priceInCents && description && category_id && brand_id && inventory) {
        await api.patch(`/products/update/${id}`, {
            name,
            priceInCents,
            description,
            category_id,
            brand_id,
            inventory
        })}
        else {
            alert('Preencha todos os campos!')
        }
    }
    return (
        <FormBox>
            <Link to='/admin_products'>&#60;&#60; Voltar</Link>
            <h1>Atualizar Produto</h1>
            <form onSubmit={updateProduct}>
                    <input placeholder="Nome" onChange={(event) => setName(event.target.value)}></input>
                    <input placeholder="Preço" onChange={(event) => setPriceInCents(event.target.value)}></input>
                    <input placeholder="Descrição" onChange={(event) => setDescription(event.target.value)}></input>
                    <input placeholder="Categoria" onChange={(event) => setCategoryId(event.target.value)}></input>
                    <input placeholder="Marca" onChange={(event) => setBrandId(event.target.value)}></input>
                    <input placeholder="Estoque" onChange={(event) => setInventory(event.target.value)}></input>
                    <button type="submit">Atualizar</button>
            </form>
        </FormBox>
    );
    }

export default AdminProductsUpdate;