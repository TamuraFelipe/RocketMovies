import {
    Container,
} from './styles'

export function Input({placeholder, type, ...rest}){
    return (
        <Container placeholder={placeholder} type={type}/>
    );
}