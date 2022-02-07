import dayjs from 'dayjs';
import { ThreeDots } from 'react-loader-spinner';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Header, UserName, ExitButton, ExtractContainer, ButtonContainer, Button, TotalValue, EntriesContainer, Entry } from './style';

import ExitSymbol from '../../assets/img/exit_symbol.svg';
import AddSymbol from '../../assets/img/add_symbol.svg';
import RemoveSymbol from '../../assets/img/remove_symbol.svg';
import UserContext from '../../contexts/UserContext';
import api from '../../service/api';
let sum = 0;

export default function ExtractPage() {
    const { user, token, isLoading, setLoading } = useContext(UserContext);

    const [extract, setExtract] = useState([]);
    const [total, setTotal] = useState();
    const [type, setType] = useState('');

    const navigate = useNavigate();

    if (!token) {
        navigate('/');
    }

    useEffect(() => {
        setExtract([]);
        setLoading(true);
        handleExtractInfo(token);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(handleTotal, [extract])

    function handleTotal() {
        const positive = extract.filter((e) => e.type === 'plus');
        const negative = extract.filter((e) => e.type === 'minus');
        let totalPositive = 0;
        let totalNegative = 0;

        for (let i = 0; i < positive.length; i++) {
            totalPositive += parseFloat(positive[i].value);
        }
        for (let i = 0; i < negative.length; i++) {
            totalNegative += parseFloat(negative[i].value);
        }

        sum = (totalPositive - totalNegative).toFixed(2);

        if (sum >= 0) {
            setType('plus');
        } else {
            setType('minus');
        }
        setTotal(sum.replace('.', ','));
    };

    async function handleExtractInfo(auth) {
        setLoading(true)
        try {
            const promise = await api.getEntries(auth);

            setExtract(promise.data.entries);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
            navigate('/');
        }
    }

    async function handleEntryDelete(id, token) {
        setLoading(true);
        if (window.confirm('Você realmente gostaria de excluir esse registro?')) {
            try {
                await api.deleteEntry(id, token);

                await handleExtractInfo(token);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
            }
        }
    }

    return (
        <Container>
            <Header>
                <UserName>Olá, {user?.name}</UserName>
                <ExitButton onClick={() => navigate('/')}><img src={ExitSymbol} alt='exit_button_symbol' /></ExitButton>
            </Header>
            <ExtractContainer>
                {extract.length === 0 && !isLoading && <span>Não há registros de <br /> entrada ou saída</span>}
                {extract.length === 0 && isLoading && <span><ThreeDots color='#8C11BE' height={25} width={150} /></span>}
                {extract.length !== 0 && isLoading && <span><ThreeDots color='#8C11BE' height={25} width={150} /></span>}

                {extract.length !== 0 && !isLoading &&
                    <>
                        <EntriesContainer>
                            {extract.map((element, id) =>
                                <Entry isPositive={element.type} key={id} id={element._id}>
                                    <div>
                                        <span className='date'>{dayjs(element.date).format('DD/MM')}</span>
                                        <span className='description'>{element.description}</span>
                                    </div>
                                    <div className='value'>
                                        <span>{(parseFloat(element.value)).toFixed(2).replace('.', ',')}</span>
                                        <span onClick={async () => await handleEntryDelete(element._id, token)}>x</span>
                                    </div>
                                </Entry>
                            )}
                        </EntriesContainer>
                        <TotalValue isPositive={type}>
                            <span className='total'>SALDO</span>
                            <span className='totalValue'>{total}</span>
                        </TotalValue>
                    </>
                }
            </ExtractContainer>
            <ButtonContainer>
                <Button margin="margin-right: 10px;" onClick={() => navigate('/add')}>
                    <img src={AddSymbol} alt='add_symbol' />
                    <span>Nova entrada</span>
                </Button>
                <Button margin="margin-left: 10px;" onClick={() => navigate('/remove')}>
                    <img src={RemoveSymbol} alt='remove_symbol' />
                    <span>Nova saída</span>
                </Button>
            </ButtonContainer>
        </Container>
    );
}