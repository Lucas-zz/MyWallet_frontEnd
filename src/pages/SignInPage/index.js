import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, ErrorMessage, StyledLink } from "./style";

import UserContext from "../../contexts/UserContext";
import Logo from '../../components/Logo';
import Button from '../../components/generic/Button';
import Input from '../../components/generic/Input';
import api from "../../service/api";


export default function SignInPage() {
    const { setUser, setToken, isLoading, setLoading } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();

        setLoading(true);
        try {
            const promise = await api.signIn({ password: password, email: email })

            setLoading(true);
            setError(false);

            setToken(promise.data.token);
            setUser(promise.data);
            navigate('/principal');

        } catch (error) {
            setLoading(false);
            setError(true)
            setErrorMessage(error.response.data);
        }
        setLoading(false);
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
            <StyledLink to='/cadastro'>
                <span>Primeira vez?</span>
                <u>Cadastre-se!</u>
            </StyledLink>
        </Container>
    );
}