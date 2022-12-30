import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
    Container,
    Avatar,
} from './styles';
''
export function Profile(){
    return(
        <Container>
            <header>
                <Return to='/'/>
            </header>
            <Avatar>
                <img 
                src="http://www.github.com/tamurafelipe.png" 
                alt="Imagem do Usuário" 
                />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id='avatar'/>
                </label>
            </Avatar>
            <form>
                <div>
                    <FiUser />
                    <Input placeholder='Nome' />
                </div>
                <div>
                    <FiMail />
                    <Input placeholder='E-mail' />
                </div>
                <div>
                    <FiLock />
                    <Input placeholder='Senha atual' />
                </div>
                <div>
                    <FiLock />
                    <Input placeholder='Nova senha' />
                </div>
                <Button title='Salvar'/>
            </form>
        </Container>
    );
}