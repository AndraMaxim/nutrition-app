import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeroContainer = styled.div`
    background: #0c0c0c;
    // display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    // position: relative;
    z-index: 1;

    :before {
        // content: '';
        // position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            from(rgba(0, 0, 0, 0.2)),
            to(rgba(0, 0, 0, 0.2))
        ),
        -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled(Link)`
    color: #09ba00;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-family: 'Pacifico', cursive;
`;

// export const NavLogo = styled.img`
//     width: 100px;
//     position: fixed;
//     top: -12px;
//     left: 10px;
//     justify-self: flex-start;
//     cursor: pointer;
//     display: flex;
//     margin: 20px 0 0 5px;
//     text-decoration: none;
// `;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroP = styled.p`
    margin: 0 auto;
    position: fixed;
    left: 44%;
    top: 2%;
    color: #fff;
    font-size: 18px;
`;

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 40px;
    left: 40px;
    right: 40px;
    top: 50px;
    z-index: 0;
    overflow: hidden;
    // background-color: yellow;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 10px 10px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormSelect = styled.select`
    padding: 10px 10px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButtonNext = styled.button`
    background: #09ba00;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    color: #010606;
    font-size: 18px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0ceb00;
}
`;

export const FormButtonBack = styled.button`
    background: #010606;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    color: #ffff;
    font-size: 14px;
    margin-top: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #09ba00;
        // background: #09ba00;
}
`;

export const FormBtnLink = styled(Link)`
    text-decoration: none;
    color: #010606;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 14px;
    color: #fff;
    font-size: 14px;
    line-height: 25px;
`;



