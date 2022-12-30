import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 10px;
    border: none;
    padding: 20px 0 0 16px;

    resize: none;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    &:focus {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

`;