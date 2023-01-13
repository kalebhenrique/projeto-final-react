import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { FormBox } from '../../components/FormBox';
import { useUserContext } from '../../contexts/useUserContext';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const { create } = useUserContext();

    return(
        <FormBox>
            <Link to="/"><img src={Logo} alt='logo'/></Link>
            <h1>Criar conta</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                create(name, phone, email, password, password_confirmation
                );
            }}>
                <input type= 'text' placeholder='Nome' value={name} required onChange={(e) => setName(e.target.value)}/>
                <input type= 'text' placeholder='Telefone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type= 'email' placeholder='E-mail' value={email} required onChange={(e) => setEmail(e.target.value)}/>
                <input type= 'password' placeholder='Senha' value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <input type= 'password' placeholder='Confirme sua senha' required value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                <button type='submit'>Entrar</button>
            </form>
        </FormBox>
    )
}

export default RegisterPage