import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailsLink = styled(Link)`
    text-decoration: none;
    color: #010606;
`;

export const StyledRecipe = styled.div`
    // margin: 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    // justify-content: flex-start;
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

    .recipe-info {
        text-align: center;
    }

    h1 {
        font-size: 1.5rem;
        margin-bottom: 20px;

        // @media screen and (max-width: 480px) {
        //     font-size: 1rem;
    }

    h2 {
        font-size: 1rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 0.6rem;
        // text-align: center;
    }

    img {
        height: 160px;
        width: 160px;
        margin-bottom: 10px;
    }

    ul {
        margin: 0;
        padding: 5px;
        font-size: 0.7rem;
    }

    li {
        list-style: none;
    }
`;

export const RecipeContent = styled.div`
    display: flex;
    align-items: center;
`;

export const RecipeBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    display: flex;
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