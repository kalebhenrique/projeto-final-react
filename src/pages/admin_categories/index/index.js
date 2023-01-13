import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import EditCrud from '../../../assets/edit_crud.png';
import DeleteCrud from '../../../assets/delete_crud.png';
import { ListCrud } from '../../../components/ListCrud.jsx';
import { ElementContainer } from '../../../components/ListCrud.jsx';

const AdminCategoriesIndex = () => {
  const [categories, setCategories] = useState([]);

  useEffect (() => {
    api.get('/categories/index').then(response => setCategories(response.data))
  }, [])

  const deleteCategory = (id) => {
    api.delete(`/categories/delete/${id}`)
    .then((response) => alert('Categoria deletado com sucesso!'))
    .catch((error) => alert('Erro ao deletar categoria!'))
  }

  return (
    <ListCrud>
        <Link to='/profile'> &#60;&#60; Voltar à página anterior </Link>
        <h1>Index Categorias</h1>
        <Link to='/admincategories/create'> Criar categoria </Link>
        <div className='list'>
            <ElementContainer>
                <div className='containers'><h3> Id </h3></div>
                <div className='containers'><h3> Nome </h3></div>
                <div className='containers'><h3> Ações </h3></div>
            </ElementContainer>
            {categories.map((item, index) => (
                <ElementContainer key={index}>
                  <div className='containers'><span> {item.id} </span></div>
                  <div className='containers'><span>{item.name}</span></div>
                  <div className='containers'>
                    <Link to={`/admincategories/update/${item.id}`}>
                      <img src={ EditCrud } className='options' alt='editar'/>
                    </Link>
                    <button type='button' onClick={() => {deleteCategory(item.id)}}>
                      <img src={ DeleteCrud } className='options' alt='deletar'/>
                    </button>
                  </div>
                </ElementContainer>
            ))}
            <ElementContainer>
                <div className='containers'><h3> Id </h3></div>
                <div className='containers'><h3> Nome </h3></div>
                <div className='containers'><h3> Ações </h3></div>
            </ElementContainer>
        </div>
    </ListCrud>
  );
}

export default AdminCategoriesIndex