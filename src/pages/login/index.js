import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { FormBox } from '../../components/FormBox';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <FormBox>
            <a href="/"><img src={Logo}/></a>
            <h1>Entrar</h1>
            <div>
                <p>Email</p>
                <input onChangeFunction={setEmail} />
                <p>Senha</p>
                <input onChangeFunction={setPassword} type='password' />
                <button type='button'>Entrar</button>
            </div>
        </FormBox>
    )
}

export default LoginPage