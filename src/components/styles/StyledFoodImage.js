import styled from 'styled-components';
import FoodBackground from '../images/amoon-ra-MU045NDK29U-unsplash.jpg';

export const StyledFoodImage = styled.div`
    background-image: url(${FoodBackground});
    background-repeat: no-repeat;
    background-size: 100%, cover !important;
    background-position: center;
    width: 100%;
    min-width: 300px;
    position: relative;

    .foodimage-content {
        padding: 20px;
        max-width: 50%;
        text-align: left;
    }

    .foodimage-text {
        max-width: 700px;
        bottom: 40px;
        margin-right: 20px;
        min-height: 100px;
        color: #fff;

        h1 {
        font-family: 'Abel', sans-serif;
        font-size: 48px;

        @media screen and (max-width: 720px) {
            font-size: 38px;
        }
        }

        p {
        font-family: 'Abel', sans-serif;
        font-size: 22px;
        line-height: 26px;

        @media screen and (max-width: 720px) {
            font-size: 16px;
            line-height: 20px;
        }
        }

        @media screen and (max-width: 720px) {
        width: 100%;
        }
    }
`;