import { FiPlus, FiX } from 'react-icons/fi';

import { 
    Container,
} from './styles';

export function MovieTag({value, isNew, onClick, placeholder, ...rest}){
    return(
        <Container isNew={isNew}>
            <input
            type="text"
            value={value}
            readOnly={!isNew}
            placeholder={placeholder}
            {...rest}
            />

            <button
            type="buttom"
            onClick={onClick}
            className={isNew ? 'button__add' : 'button__delete'}
            >
            
            {isNew ? <FiPlus /> : <FiX />}
            
            </button>
        </Container>
    );
}