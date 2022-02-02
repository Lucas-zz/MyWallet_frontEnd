import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 25px;

    background-color: #8C11BE;
`;

const StyledLink = styled(Link)`
    width: 100%;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 40px;

    font-size: 15px;
    font-weight: 700;
    line-height: 17.61px;

    color: #FFF;
`;

const ErrorMessage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 10px;

    font-size: 10px;
    line-height: 17px;

    color: #CC2828;
`;

export {
    Container,
    StyledLink,
    ErrorMessage,
}