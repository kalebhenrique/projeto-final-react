import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { FormBox } from '../../components/FormBox';
import { useUserContext } from '../../contexts/useUserContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = useUserContext();

    return(
        <FormBox>
            <Link to="/"><img src={Logo} alt='logo'/></Link>
            {user?.email && <h2>Bem vindo, {user.email}!</h2>}
            <h1>Entrar</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                login(email, password
                );
            }}>
                <input type= 'email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type= 'password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Entrar</button>
            </form>
        </FormBox>
    )
}

export default LoginPage