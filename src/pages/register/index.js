import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { FormBox } from '../../components/FormBox';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <FormBox>
            <a href="/"><img src={Logo}/></a>
            <h1>Criar conta</h1>
            <div>
                <p>Nome de usuário</p>
                <input onChangeFunction={setEmail} />
                <p>Email</p>
                <input onChangeFunction={setEmail} type='email'/>
                <p>Número de telefone</p>
                <input onChangeFunction={setEmail} />
                <p>Senha</p>
                <input onChangeFunction={setPassword} type='password' />
                <p>Confirmar senha</p>
                <input onChangeFunction={setPassword} type='password' />
                <button type='button'>Criar conta</button>
            </div>
        </FormBox>
    )
}

export default RegisterPage