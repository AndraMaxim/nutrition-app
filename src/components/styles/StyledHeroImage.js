import styled from 'styled-components';
import HeroBackground from '../images/amoon-ra-MU045NDK29U-unsplash.jpg';

export const StyledHeroImage = styled.div`
    background-image: url(${HeroBackground});
    background-repeat: no-repeat;
    background-size: 100%, cover !important;
    background-position: center;
    width: 100%;
    min-width: 300px;
    position: relative;

    .heroimage-content {
        padding: 20px;
        margin: 0 auto;
    }

    .heroimage-text {
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