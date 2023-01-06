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
            <Link to="/"><img src={Logo}/></Link>
            <h1>Entrar</h1>
            <div>
                <p>Email</p>
                <input onChangeFunction={setEmail} />
                <p>Senha</p>
                <input onChangeFunction={setPassword} type='password' />
                <button onClick={() => login(email, password)}>Entrar</button>
            </div>
        </FormBox>
    )
}

export default LoginPage