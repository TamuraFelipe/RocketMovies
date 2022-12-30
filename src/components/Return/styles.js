import arrowLeft from '../../assets/Vector.svg';
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: fit-content;

    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    &:before {
        content: "";
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(${arrowLeft});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
    }
`;