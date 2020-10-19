import styled from 'styled-components';

export const StyledRecipe = styled.div`
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
    height: auto;

    h3 {
        font-family: 'Abel', sans-serif;
        font-size: 18px;
        padding-top: 20px;
        }

    p {
        font-family: 'Abel', sans-serif;
        font-size: 12px;

        @media screen and (max-width: 720px) {
            font-size: 10px;
            line-height: 20px;
        }
        }

    ul {
        list-style: none;
        margin: 0;
        padding: 5px;
        font-size: 12px;
        }
        
    .nutrients-content {
        text-align: center;
        column-count: 2;
        }

    ul.nutrient-name {
        white-space: nowrap;
        text-align: left;
        }

    ul.nutrient-value {
        text-align: right;
        }

    .recipe-button {
        font-family: 'Abel', sans-serif;
        font-size: 15px;
        cursor: pointer;
        background: #1c1c1c;
        height: 30px;
        border: 0;
        border-radius: 30px;
        color: #fff;
        padding: 0 15px;
        outline:none;
        margin: 20px;
        }

    .recipe-button:hover {
        background-color: #3e8e41;
        }

    .recipe-button:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
        }
`;