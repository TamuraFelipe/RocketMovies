import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 400;
    font-size: 16px;

    background-color: ${({ theme, inverted }) => inverted ? theme.COLORS.BACKGROUND_910 : theme.COLORS.PINK};
    color: ${({ theme, inverted }) => inverted ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};

    

    padding: 12px 32px;

    border-radius: 8px;
    border: none;

    cursor: pointer;
`;