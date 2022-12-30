import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { MovieTag } from '../../components/MovieTag';
import { Button } from '../../components/Button';

import {
    Container,
    Form,
    RowForm,
} from './styles';

export function NewMovies(){
    return(
        <Container>
            <Header />
            <div>
                <Return to="/"/>
                <div className="title">
                    <span>Novo filme</span>
                </div>
            </div>
            <Form>
                <RowForm>
                    <Input placeholder='Título'/>
                    <Input placeholder='Sua nota (de 0 a 5)'/>
                </RowForm>
                <Textarea placeholder='Observações'/>
                <h2>Marcadores</h2>
                <RowForm className='bg--dark'>
                    <div className="bg--dark">
                        <MovieTag value='React'/>
                        <MovieTag value='Nodejs'/>
                        <MovieTag placeholder='Novo marcador' isNew/>
                    </div>
                </RowForm>
                <RowForm>
                    <Button title='Excluir filmes' inverted/>
                    <Button title='Salvar alterações'/>
                </RowForm>
            </Form>

        </Container>
    );
}