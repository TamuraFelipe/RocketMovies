import styled from "styled-components";

export const Container = styled.input`
    width: 630px;
    height: 56px;

    padding: 19px 0px 19px 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 10px;
    border: none;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    &:focus {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;