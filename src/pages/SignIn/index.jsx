import { FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
    Container,
    ImgBg,
    Login,
    Form
} from './styles';

export function SignIn(){
    return(
        <Container>
            <Login>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login</h2>
                <Form>
                    <div>
                        <FiMail />
                        <Input placeholder='E-mail'/>
                    </div>
                    <div>
                        <FiLock />
                        <Input placeholder='Senha'/>
                    </div>
                    <Button title='Entrar'/>
                </Form>
                <a href="/register">Criar conta</a>
            </Login>
            <ImgBg />
        </Container>
    );
}