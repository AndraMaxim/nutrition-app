import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.div`
    // height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
`;

export const ServicesWrapper = styled.div`
    margin: 26px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ServiceLink = styled(Link)`
    text-decoration: none;
    color: #010606;
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    // max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const RecipeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
`;

export const RecipeBtnLink = styled(Link)`
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 10px 22px;
    margin-top: 30px;
    color: #ffff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #09ba00;
        color: #010606;
    }
`;