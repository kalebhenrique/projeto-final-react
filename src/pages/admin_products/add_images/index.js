import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { api } from '../../../services/api'
import { FormBox } from "../../../components/FormBox";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AdminProductsAddImages = () => {
    let { id } = useParams()
    const [images, setImages] = useState([])
    const [images_url, setImagesUrl] = useState([])
    const [name, setName] = useState('')

    useEffect (() => {
        api.get(`products/show/${id}`).then((response) => {
            setImagesUrl(response.data.images_url)
            setName(response.data.name)
        })
    },[id])

    const addPhoto = async () => {
        const formData = new FormData()
        formData.append('images[]', images[0])

        const response = await api.post(`products/add_images/${id}`, formData)
        if(response.data){
            alert('Foto adicionada')
            setImages(response.data)
        }
    }

    return (
        <FormBox>
            <Link to='/adminproducts'>&#60;&#60; Voltar </Link>
            <h1>Adicionar foto à {name}</h1>
            <LazyLoadImage
            src={`http://localhost:3001${images_url}`}
            alt='imagem do produto'
            effect='blur'/>
            <form onSubmit={addPhoto}>
                <input placeholder='File' type='file' onChangeCapture={(e) => setImages(e.target.files)}></input>
                <button type='submit'> Adicionar </button>
            </form>
        </FormBox>
    )
}

export default AdminProductsAddImages