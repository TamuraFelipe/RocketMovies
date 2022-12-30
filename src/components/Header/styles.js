import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 116px;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_300};
    padding: 0 123px;
    margin-bottom: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        a {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;

            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;

    } 
`;
export const Back = styled.button`
    width: fit-content;

    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: none;
    border: none;

    cursor: pointer;
`;