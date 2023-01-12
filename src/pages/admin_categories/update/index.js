import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminCategoriesUpdate = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/categories/show/${id}`)
        .then(response => {
            setName(response.data.name)
            setLoading(false)
        })
    }, [id])

    const updateCategories = async () => {
        if (name) {
        await api.patch(`/categories/update/${id}`, {
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
            <h1>Atualizar Categoria</h1>
            {loading ? <p>Carregando...</p> : (
            <form onSubmit={updateCategories}>
                <input value={name} placeholder="Nome" onChange={(categories) => setName(categories.target.value)}/>
                <button type="submit">Atualizar</button>
            </form>
            )}
        </FormBox>
    );
    }

export default AdminCategoriesUpdate;