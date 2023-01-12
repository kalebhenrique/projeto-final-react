import { useState } from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminBrandsCreate = () => {
    const [name, setName] = useState('');

    const createBrands = async (e) => {
        e.preventDefault();
        if (name) {
            await api.post('/brands/create', {
            name
        })
        alert('Produto criado com sucesso!')
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <FormBox>
            <Link to='/adminbrands'>&#60;&#60; Voltar</Link>
            <h1>Criar Marca</h1>
            <form onSubmit={createBrands}>
                    <input placeholder="Nome" onChange={(e) => setName(e.target.value)}></input>
                    <button type="submit">Criar</button>
            </form>
        </FormBox>
    )

}

export default AdminBrandsCreate;