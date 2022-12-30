import styled from "styled-components";

export const Container = styled.span`
    display: inline-block;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    padding: 8px 16px;
    margin-right: 8px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    border-radius: 8px
`;