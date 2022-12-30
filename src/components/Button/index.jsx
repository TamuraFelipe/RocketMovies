
import {
    Container,
} from './styles';

export function Button({title, disabled, inverted, plus}){
    return(
        <Container plus={plus} inverted={inverted}>
            {title}{plus}
        </Container>
    );
}