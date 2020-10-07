import styled from 'styled-components';
import HomeBackground from '../images/home-background.jpg';

export const StyledHomeImage = styled.div`
    background-image: url(${HomeBackground});
    background-repeat: no-repeat;
    background-size: 100%, cover !important;
    background-position: center;
    width: 100%;
    height: 500px;
    min-width: 300px;
    position: relative;

    .homeimage-content {
        padding: 20px;
        margin: 0 auto;
    }

    .homeimage-text {
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