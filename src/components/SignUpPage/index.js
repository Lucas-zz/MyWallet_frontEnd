import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, ErrorMessage, StyledLink } from "./style";

import UserContext from "../../contexts/UserContext";
import Logo from '../generic/Logo';
import Button from '../generic/Button';
import Input from '../generic/Input';

export default function SignUpPage() {
    const { isLoading, setLoading } = useContext(UserContext);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleSignUp(event) {
        event.preventDefault();

        setLoading(true);

        const promise = axios.post('http://localhost:5000/sign-up', {
            ...formData
        });

        promise.then(() => {
            setLoading(false);
            navigate('/');
        });

        promise.catch(error => {
            setLoading(true);

            if (false) {
                // VALIDAÇÃO DE ERROS, ASSIM COMO A CONFIRMAÇÃO DA SENHA
                setErrorMessage('')
            }

            setError(true);
            console.log(error.response);
        });
    }

    function handleInputChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    return (
        <Container>
            <Logo />
            <form onSubmit={handleSignUp}>
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    name="name"
                    placeholder="Nome"
                    required
                />
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    name="email"
                    placeholder="E-mail"
                    required
                />
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Senha"
                    required
                />
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type="password"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    name="image"
                    placeholder="Confirme a senha"
                    required
                />
                {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <Button isLoading={isLoading} disabled={isLoading} type="submit">
                    {isLoading ? <ThreeDots type="ThreeDots" color="#FFF" height={13} width={100} /> : "Cadastrar"}
                </Button>
            </form>
            <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container >
    );
}
