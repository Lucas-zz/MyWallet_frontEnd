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

const UserName = styled.span`
    font-size: 26px;
    font-weight: 700;
    line-height: 30.52px;
    color: #FFF;


    text-align: left;
`;

const ExitButton = styled.span`
    width: 25px;
    height: 25px;
    
    font-size: 26px;
    line-height: 31px;

    text-align: right;
`;

const ExtractContainer = styled.div`
    width: 100%;
    height: 446px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    background-color: #FFF;

    span {
        font-size: 20px;
        font-weight: 400;
        line-height: 23.48px;
        text-align: center;
        color: #868686;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 0;
`;

const Button = styled.button`
    width: 100%;
    height: 114px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    border-radius: 5px;

    padding: 10px;

    ${props => props.margin}

    background-color: #A328D6;

    &:hover {
        opacity: 0.8;
    }

    img {
        width: 22px;
        height: 22px;
    }

    span {
        width: 40px;

        font-size: 17px;
        font-weight: 700;
        line-height: 20px;
        color: #FFF;

    }
`;

export {
    Container,
    Header,
    UserName,
    ExitButton,
    ExtractContainer,
    ButtonContainer,
    Button
}