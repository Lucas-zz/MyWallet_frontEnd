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
    width: 100%;
    height: 30px;
    
    font-size: 26px;
    font-weight: 700;
    line-height: 30.52px;
    color: #FFF;

    text-align: left;

    overflow: hidden;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    background-color: #FFF;

    position: relative;

    span {
        font-size: 20px;
        font-weight: 400;
        line-height: 23.48px;
        text-align: center;
        color: #868686;
    }
`;

const EntriesContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    
    gap: 10px;

    padding: 23px 1em 40px 1em;

    overflow: scroll;
`;

const Entry = styled.div`
    width: 100%;
    height: 20px;

    display: flex;
    justify-content: space-between;

    div:first-of-type {
        span:first-of-type {
            font-size: 16px;
            font-weight: 400;
            line-height: 18.78px;

            padding-right: 7px;

            color: #C6C6C6;
        }
        span:last-of-type{
            font-size: 16px;
            font-weight: 400;
            line-height: 18.78px;

            color: #000;
        }
    }
    div:last-of-type{
        span:first-of-type {
            font-size: 16px;
            font-weight: 400;
            line-height: 18.78px;

            padding-right: 12px;

            color: ${props => props.isPositive === 'plus' ? '#03AC00' : '#C70000'};
        }

        span:last-of-type {
            font-size: 16px;
            font-weight: 400;
            line-height: 18.78px;

            color: #C6C6C6;
        }

    }

`;

const TotalValue = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 10px 15px;
    border-radius: 5px;

    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    
    background-color: #FFF;

    span:first-of-type {
        font-size: 17px;
        font-weight: 700;
        line-height: 19.96px;

        color: #000;

    }
    span:last-of-type{
        font-size: 17px;
        line-height: 400;
        line-height: 19.96px;
        color: ${props => props.isPositive === 'plus' ? '#03AC00' : '#C70000'};
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
    EntriesContainer,
    Entry,
    TotalValue,
    Button,
}