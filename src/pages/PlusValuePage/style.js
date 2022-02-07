import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 25px;
`;

const Header = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 0;
`;

const Title = styled.span`
    font-size: 26px;
    font-weight: 700;
    line-height: 30.52px;
    color: #FFF;


    text-align: left;
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
    Header,
    Title,
    ErrorMessage
}