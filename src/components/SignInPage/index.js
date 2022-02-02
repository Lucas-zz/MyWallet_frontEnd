import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, ErrorMessage, StyledLink } from "./style";

import UserContext from "../../contexts/UserContext";
import Logo from '../generic/Logo';
import Button from '../generic/Button';
import Input from '../generic/Input';


export default function SignInPage() {
    const { setUser, setToken, isLoading, setLoading } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        setLoading(true);

        const promise = axios.post('http://localhost:5000/sign-in', {
            email,
            password,
        });

        promise.then(response => {
            setLoading(true);
            setError(false)

            setUser(response.data);
            setToken(response.data.token);

            navigate('/principal');
        });
        promise.catch(error => {
            setLoading(false);
            setError(true)
            setErrorMessage(error.response.data.message);

            console.log(error.response);
        });
    }

    return (
        <Container>
            <Logo />
            <form onSubmit={handleLogin}>
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="E-mail"
                    required
                />
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Senha"
                    required
                />

                {error && <ErrorMessage>{errorMessage}</ErrorMessage>}

                <Button isLoading={isLoading} disabled={isLoading} type="submit">
                    {isLoading ? <ThreeDots color='#FFF' height={13} width={100} /> : 'Entrar'}
                </Button>
            </form>
            <StyledLink to='/cadastro'>Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    );
}