import styled from 'styled-components';
import FoodBackground from '../../images/amoon-ra-MU045NDK29U-unsplash.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-image: url(${FoodBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

export const Icon = styled(Link)`
    text-decoration: none;
    color: #ffff;
    font-size: 35px;
    cursor: pointer;
    float: right;
    margin-top: -35px;
`;

export const FormContent = styled.div`
    margin: 0 auto;
    justify-content: center;
    width: 430px;

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
    padding: 80px 32px;
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

export const FormLink = styled(Link)`
    text-decoration: none;
    color: #010606;
`;

export const SignupLink = styled(Link)`
    color: #ffff;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #09ba00;
`;

export const FormButton = styled.button`
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

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;

export const TextError = styled.span`
    width: 100%;
    text-align: center;
    background: #CCB6B6;
    border-radius: 4px;
    margin-bottom: 30px;
    padding: 10px;
    color: #800000;
    font-size: 14px;
`;

export const TextSuccess = styled.span`
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    background: #B6CCB6;
    border-radius: 4px;
    padding: 10px;
    color: #008009;
    font-size: 14px;
`;