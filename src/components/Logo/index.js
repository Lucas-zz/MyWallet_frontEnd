import Logo from '../../assets/img/MyWallet.png';
import { Container } from './style';

export default function SignLogo() {
    return (
        <Container>
            <img src={Logo} alt='MyWallet Logo' />
        </Container>
    );
}