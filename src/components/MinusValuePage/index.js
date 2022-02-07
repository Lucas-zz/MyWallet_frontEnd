import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useContext, useState } from 'react';

import { Container, ErrorMessage, Header, Title } from './style';

import UserContext from '../../contexts/UserContext';
import Button from '../generic/Button';
import Input from '../generic/Input';
import { useNavigate } from 'react-router-dom';

export default function MinusValuePage() {
    const { token, isLoading, setLoading } = useContext(UserContext);

    const [newEntry, setNewEntry] = useState({
        value: '',
        type: 'minus',
        description: '',
    })

    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    if (!token) {
        navigate('/');
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        try {
            await axios.post('http://localhost:5000/entry', newEntry, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setTimeout(() => {
                setLoading(false);
                navigate('/principal');
            }, 1000);

        } catch (error) {
            console.log(error);
            setLoading(false);

            setError(true);
            setErrorMessage(error);
        }
    }

    return (
        <Container>
            <Header>
                <Title>Nova saída</Title>
            </Header>
            <form onSubmit={handleSubmit}>
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type='number'
                    value={newEntry.value}
                    onChange={event => setNewEntry({ ...newEntry, 'value': event.target.value })}
                    placeholder='Valor'
                    required
                />
                <Input
                    isLoading={isLoading}
                    disabled={isLoading}
                    type='text'
                    value={newEntry.description}
                    onChange={event => setNewEntry({ ...newEntry, 'description': event.target.value })}
                    placeholder='Descrição'
                    required
                />

                {error && <ErrorMessage>{errorMessage}</ErrorMessage>}

                <Button isLoading={isLoading} disabled={isLoading} type='submit'>
                    {isLoading ? <ThreeDots color='#FFF' height={13} width={100} /> : 'Salvar saída'}
                </Button>

            </form>
        </Container>
    );
}