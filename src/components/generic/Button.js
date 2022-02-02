import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 46px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-weight: 700;
    line-height: 23.48px;

    border: none;
    border-radius: 5px;

    color: #FFF;
    background-color: #A328D6;

    cursor: pointer;

    opacity: ${props => props.isLoading ? 0.7 : 1};
`;

export default Button;