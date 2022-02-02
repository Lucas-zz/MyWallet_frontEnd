import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    height: 58px;

    font-size: 20px;
    line-height: 23.48px;

    background-color: ${props => props.isLoading ? '##F2F2F2' : '#FFF'};

    padding: 15px;
    margin-bottom: 13px;

    border: none;
    border-radius: 5px;

    ::placeholder {
        color: ${props => props.isLoading ? '#AFAFAF' : '#000'};
        opacity: ${props => props.isLoading ? 0.5 : 1};
    }
    &:focus {
        outline: none;
    }
`;

export default Input;