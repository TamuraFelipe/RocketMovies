import { FiUser, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { 
    Container,
    ImgBg,
    Login,
    Form
} from './styles';

export function SignUp(){
    return(
        <Container>
            <ImgBg />
            <Login>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Form>
                    <div>
                        <FiUser />
                        <Input placeholder='Nome' type='text'/>
                    </div>
                    <div>
                        <FiLock />
                        <Input placeholder='E-Mail' type='text'/>
                    </div>
                    <div>
                        <FiLock />
                        <Input placeholder='Senha' type='password'/>
                    </div>
                    <Button title='Entrar'/>
                </Form>
                <a href="/">Fazer login</a>
            </Login>
        </Container>
    );
}