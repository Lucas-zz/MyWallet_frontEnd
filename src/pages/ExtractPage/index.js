import axios from 'axios';
import dayjs from 'dayjs';
import { ThreeDots } from 'react-loader-spinner';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Header, UserName, ExitButton, ExtractContainer, ButtonContainer, Button, TotalValue, EntriesContainer, Entry } from './style';

import ExitSymbol from '../../assets/img/exit_symbol.svg';
import AddSymbol from '../../assets/img/add_symbol.svg';
import RemoveSymbol from '../../assets/img/remove_symbol.svg';
import UserContext from '../../contexts/UserContext';
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
        setLoading(false);
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
            const promise = await axios.get('http://localhost:5000/entries', {
                headers: {
                    Authorization: `Bearer ${auth}`
                }
            });

            setExtract(promise.data.entries);
        } catch (error) {
            console.log(error);
            setLoading(false);
            navigate('/');
        }
    }

    return (
        <Container>
            <Header>
                <UserName>Olá, {user?.name}</UserName>
                <ExitButton onClick={() => navigate('/')}><img src={ExitSymbol} alt='exit_button_symbol' /></ExitButton>
            </Header>
            <ExtractContainer>
                {isLoading && <span><ThreeDots color='#8C11BE' height={25} width={150} /></span>}
                {extract.length === 0 && !isLoading && <span>Não há registros de <br /> entrada ou saída</span>}
                {extract.length !== 0 &&
                    <>
                        <EntriesContainer>
                            {extract.map((element, id) =>
                                <Entry isPositive={element.type} key={id}>
                                    <div>
                                        <span className='date'>{dayjs(element.date).format('DD/MM')}</span>
                                        <span className='description'>{element.description}</span>
                                    </div>
                                    <div className='value'>{(parseFloat(element.value)).toFixed(2).replace('.', ',')}</div>
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