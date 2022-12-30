import { useState } from 'react';
import { Container } from "./styles"

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <Container>
            <h1>Entrar</h1>
            <div>
                <p>Email</p>
                <input onChangeFunction={setEmail} />
                <p>Senha</p>
                <input onChangeFunction={setPassword} type='password' />
                <button type='button'>Entrar</button>
            </div>
        </Container>
    )
}

export default LoginPage