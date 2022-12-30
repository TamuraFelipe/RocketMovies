import styled from "styled-components";

export const Container = styled.div`
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
`;
export const Movie = styled.div`
    width: 100%;
    overflow-y: auto;
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
        .star {
            padding: 5px;
            display: inline-block;
        }
    }

    > .infos {
        display: flex;
        align-items: center;
        margin-top: 24px;
        .user, .time {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-right: 16px;
            img {
                border-radius: 50%;
                width: 16px;
                height: 16px;
            }
            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }
            span {
                font-weight: 400;
                font-size: 16px;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }
    }

    > .tags {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-block: 40px
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        margin-bottom: 10px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;