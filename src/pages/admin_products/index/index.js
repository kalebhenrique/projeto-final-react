import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ElementContainer } from './styles.js';
import { Container } from './styles.js'
import { api } from '../../../services/api';
import PhotoCrud from '../../../assets/photo_crud.png';
import EditCrud from '../../../assets/edit_crud.png';
import DeleteCrud from '../../../assets/delete_crud.png';

const AdminProductsIndex = () => {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    api.get('/products/index').then(response => setProducts(response.data))
  }, [])

  const deleteProduct = (id) => {
    api.delete(`/products/delete/${id}`)
    .then((response) => alert('Produto deletado com sucesso!'))
    .catch((error) => alert('Erro ao deletar produto!'))
  }


  return (
    <Container>
        <Link to='/profile'> &#60;&#60; Voltar à página anterior </Link>
        <h1>Index Produtos</h1>
        <Link to='/admin_products/create'> Criar produto </Link>
        <div className='products_list'>
            <ElementContainer>
                <div className='containers'><h3> Nome </h3></div>
                <div className='containers'><h3> Preço </h3></div>
                <div className='containers'><h3> Descrição </h3></div>
                <div className='containers'><h3> Categoria </h3></div>
                <div className='containers'><h3> Marca </h3></div>
                <div className='containers'><h3> Estoque </h3></div>
                <div className='containers'><h3> Imagem </h3></div>
                <div className='containers'><h3> Ações </h3></div>
            </ElementContainer>
            {products.map((item, index) => (
                <ElementContainer>
                  <div className='containers'><span> {item.name} </span></div>
                  <div className='containers'>
                    <span> {(item.price_in_cents/100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </span>
                  </div>
                  <div className='containers'><span>{item.description}</span></div>
                  <div className='containers'><span>{item.category.name}</span></div>
                  <div className='containers'><span>{item.brand.name}</span></div>
                  <div className='containers'><span>{item.inventory}</span></div>
                  <div className='containers'>
                    <img src={`http://localhost:3001${item.images_url}`} alt='imagem do produto'/>
                  </div>
                  <div className='containers'>
                    <Link to={`/admin_products/update/${item.id}`}>
                      <img src={ EditCrud } className='options' alt='editar'/>
                    </Link>
                    <Link to={`/admin_products/add_photo/${item.id}`}>
                      <img src={ PhotoCrud } className='options' alt='adicionar foto'/>
                    </Link>
                    <button type='button' onClick={() => {deleteProduct(item.id)}}>
                      <img src={ DeleteCrud } className='options' alt='deletar'/>
                    </button>
                  </div>
                </ElementContainer>
            ))}
            <ElementContainer>
                <div className='containers'><h3> Nome </h3></div>
                <div className='containers'><h3> Preço </h3></div>
                <div className='containers'><h3> Descrição </h3></div>
                <div className='containers'><h3> Categoria </h3></div>
                <div className='containers'><h3> Marca </h3></div>
                <div className='containers'><h3> Estoque </h3></div>
                <div className='containers'><h3> Imagem </h3></div>
                <div className='containers'><h3> Ações </h3></div>
            </ElementContainer>
        </div>
    </Container>
  );
}

export default AdminProductsIndex