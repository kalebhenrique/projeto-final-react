import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { FormBox } from '../../components/FormBox';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return(
        <FormBox>
            <Link to="/"><img src={Logo}/></Link>
            <h1>Criar conta</h1>
            <div>
                <p>Nome de usuário</p>
                <input onChangeFunction={setName} />
                <p>Email</p>
                <input onChangeFunction={setEmail} type='email'/>
                <p>Número de telefone</p>
                <input onChangeFunction={setPhone} />
                <p>Senha</p>
                <input onChangeFunction={setPassword} type='password' />
                <p>Confirmar senha</p>
                <input onChangeFunction={setConfirmPassword} type='password' />
                <button type='button'>Criar conta</button>
            </div>
        </FormBox>
    )
}

export default RegisterPage