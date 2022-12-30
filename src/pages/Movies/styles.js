import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header"
                         "content";
    grid-template-rows: 116px auto;

    margin: 0 auto;
    padding-bottom: 40px;

    > main {
        grid-area: content;
        margin-top: 40px;
        overflow-y: auto;

        &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
        &::-webkit-scrollbar {
            width: 8px;
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            height: 10px;
            background: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 20px;
        }
    }
`;
export const Content = styled.div`
    padding: 0 123px;
    
    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
        
        h1 {
            font-weight: 400;
            font-size: 32px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;
export const Card = styled.div`
    max-width: 100%;
    margin: 0 auto 20px;
    padding: 32px;

    border-radius: 16px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_OPACITY};

    > span:first-child {
        display: block;
        margin-bottom: 10px;
    }
    .star {
        padding: 5px 5px 5px 0;
        display: inline-block;
    }
    > .title {
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > .desc {
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        margin: 20px 0 40px 0;
    }
`;
export const Register = styled(Link)`
    background: ${({ theme }) => theme.COLORS.PINK};
    color: #1C1B1E;
    padding: 12px 32px;
    border-radius: 8px;
    text-decoration: none;
`;