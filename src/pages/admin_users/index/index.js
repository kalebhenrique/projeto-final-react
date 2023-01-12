import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ElementContainer } from '../../../components/ListCrud.jsx';
import { api } from '../../../services/api';
import { ListCrud } from '../../../components/ListCrud.jsx';

const AdminUsersIndex = () => {
  const [users, setUsers] = useState([]);

  useEffect (() => {
    api.get('/users/index').then(response => setUsers(response.data))
  }, [])

  return (
    <ListCrud>
        <Link to='/profile'> &#60;&#60; Voltar à página anterior </Link>
        <h1>Index Usuários</h1>
        <div className='list'>
            <ElementContainer>
                <div className='containers'><h3> Nome </h3></div>
                <div className='containers'><h3> Permissões de Admin </h3></div>
            </ElementContainer>
            {users.map((item, index) => (
                <ElementContainer key={index}>
                  <div className='containers'><span> {item.name} </span></div>
                  <div className='containers'>
                    {
                        item.is_admin ? <span> Sim </span> : <span> Não </span>
                    }
                  </div>
                </ElementContainer>
            ))}
            <ElementContainer>
                <div className='containers'><h3> Nome </h3></div>
                <div className='containers'><h3> Permissões de Admin </h3></div>
            </ElementContainer>
        </div>
    </ListCrud>
  );
}

export default AdminUsersIndex