import styled from "styled-components";

import imgBg from '../../assets/img1.jpg';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
`;
export const ImgBg = styled.div`
    background: url(${imgBg}) no-repeat center center;
    background-size: cover;
`;
export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 340px;
    margin: 0 auto;

    > h1 {
        font-weight: 700;
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    > p {
        font-size: 14px;
        color: #CAC4CF;
    }
    > h2 {
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-block: 48px;
    }

    > a {
        display: block;
        margin-top: 42px;
        text-align: center;
        text-decoration: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
export const Form = styled.form`
    width: 100%;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 10px;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        border-radius: 10px;
        margin-bottom: 8px; 
        svg {
            font-size: 40px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    > button {
        width: 100%;
        margin-top: 24px;
        justify-content: center;
        font-weight: 500;
    }
`;