import { Input } from '../../components/Input';

import {
    Container,
    Profile, 
    Back
} from './styles';

export function Header(){
    return (
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder='Pesquisar pelo título'/>
            <Profile>
                <div>
                    <a href='/profile'>Felipe Diego Tamura</a>
                    <Back>sair</Back>
                </div>
                <img src="http://github.com/tamurafelipe.png" alt="Foto Usuário" />
            </Profile>
        </Container>
    );
}