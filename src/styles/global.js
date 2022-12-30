import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        font-family: 'Roboto Slab', serif;
    }
    p {
        text-align: justify;
    }
    a {
        text-decoration: none;
    }
    button, a {
        transition: all 300ms;
        &:hover {
            opacity: .7;
        }
    }
`;