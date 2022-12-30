import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
        cursor: pointer;
    }

    .button__delete {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    .button__add {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
        background: transparent;

        border: none;

        cursor: ${({ isNew }) => isNew ? 'pointer' : 'default'};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;