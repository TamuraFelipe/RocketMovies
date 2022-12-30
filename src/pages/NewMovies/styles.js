import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    
    > div {
        padding: 0 123px;

        .title {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 24px;
            span {
                font-weight: 500;
                font-size: 36px;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }
    }
`;
export const Form = styled.form`
    width: 100%;

    padding: 0 123px;
    margin-block: 40px;

    > textarea {
        margin-block: 40px;
    }
    > h2 {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        margin-bottom: 24px;
    }
`;
export const RowForm = styled.div`
    display: flex;
    gap: 40px;
    margin-top: 40px;

    .bg--dark {
        display: flex;
        gap: 24px;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_910};
        padding: 10px;
    }

    > input {
        width: 100%;
    }
    > button {
        width: 100%;
        justify-content: center;
    }
`;