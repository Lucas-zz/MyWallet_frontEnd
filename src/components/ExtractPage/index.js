// import axios from 'axios';
// import { ThreeDots } from 'react-loader-spinner';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Header, UserName, ExitButton, ExtractContainer, ButtonContainer, Button } from './style';

import ExitSymbol from '../../assets/img/exit_symbol.svg';
import AddSymbol from '../../assets/img/add_symbol.svg';
import RemoveSymbol from '../../assets/img/remove_symbol.svg';
import UserContext from '../../contexts/UserContext';

const valor = 0;

export default function ExtractPage() {
    const { user, token, setLoading } = useContext(UserContext);

    const navigate = useNavigate();

    setLoading(false);

    async function handleExtractInfo() {

    }

    return (
        <Container>
            <Header>
                <UserName>Olá, {user.name}</UserName>
                <ExitButton onClick={() => navigate('/')}><img src={ExitSymbol} alt='exit_button_symbol' /></ExitButton>
            </Header>
            <ExtractContainer>
                {valor === 0 && <span>Não há registros de <br /> entrada ou saída</span>}

            </ExtractContainer>
            <ButtonContainer>
                <Button margin="margin-right: 10px;" onClick={() => navigate('/add')}>
                    <img src={AddSymbol} alt='add_symbol' />
                    <span>Nova Entrada</span>
                </Button>
                <Button margin="margin-left: 10px;" onClick={() => navigate('/remove')}>
                    <img src={RemoveSymbol} alt='add_symbol' />
                    <span>Nova Saída</span>
                </Button>
            </ButtonContainer>
        </Container>
    );
}