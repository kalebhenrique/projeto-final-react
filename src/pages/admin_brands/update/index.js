import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FormBox } from "../../../components/FormBox";
import { api } from "../../../services/api";

const AdminBrandsUpdate = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/brands/show/${id}`)
        .then(response => {
            setName(response.data.name)
            setLoading(false)
        })
    }, [id])

    const updateBrands = async () => {
        if (name) {
        await api.patch(`/brands/update/${id}`, {
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
            <h1>Atualizar Marca</h1>
            {loading ? <p>Carregando...</p> : (
            <form onSubmit={updateBrands}>
                <input value={name} placeholder="Nome" onChange={(brands) => setName(brands.target.value)}/>
                <button type="submit">Atualizar</button>
            </form>
            )}
        </FormBox>
    );
    }

export default AdminBrandsUpdate;