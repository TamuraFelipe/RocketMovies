import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
    width: 100%;

    > header {
        display: flex;
        align-items: center;

        padding: 0 123px;

        height: 144px;
        background-color: rgba(255, 133, 155, 0.05);
    }
    
    > form {
        max-width: 360px;
        margin: 0 auto;
        div {
            display: flex;
            align-items: center;
            background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            border-radius: 10px;
            margin-bottom: 8px;
            &:nth-child(2){
                margin-bottom: 24px;
            }
            svg {
                color: ${({ theme }) => theme.COLORS.GRAY_300};
                font-size: 54px;
                padding-left: 16px;
            }
        }
        button {
            width: 100%;
            justify-content: center;
            margin-top: 24px;
            opacity: .7;
        }
    }
`;
export const Avatar = styled.div`
        position: relative;
        width: 186px;
        height: 186px;
        margin: -90px auto 64px;
        
        > img {
            width: 186px;
            height: 186px;
            border-radius: 50%;
        }
        >label {
            display: flex;
            align-items: center;
            justify-content: center;
            
            width: 48px;
            height: 48px;
            
            background: #FF859B;
            border-radius: 50%;
            
            position: absolute;
            bottom: 7px;
            right: 7px;
            
            svg {
                width: 20px;
                height: 20px;

            }
            input {
                display: none;
            }
        }
`;