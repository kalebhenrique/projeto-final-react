import { useState } from "react";
import { Link } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminCategoriesCreate = () => {
    const [name, setName] = useState('');

    const createCategory = async (e) => {
        e.preventDefault();
        if (name) {
            await api.post('/categories/create', {
            name
        })
        alert('Produto criado com sucesso!')
        } else {
            alert('Preencha todos os campos!')
        }
    }

    return (
        <FormBox>
            <Link to='/admincategories'>&#60;&#60; Voltar</Link>
            <h1>Criar Categoria</h1>
            <form onSubmit={createCategory}>
                    <input placeholder="Nome" onChange={(e) => setName(e.target.value)}></input>
                    <button type="submit">Criar</button>
            </form>
        </FormBox>
    )

}

export default AdminCategoriesCreate;