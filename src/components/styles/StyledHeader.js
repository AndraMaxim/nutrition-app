import styled from 'styled-components';

export const StyledHeader = styled.div`
    background: #1c1c1c;
    padding: 0 20px;
    box-sizing: border-box;

    .header-content {
        padding: 10px 0px;
        margin: 0 auto;
        box-sizing: border-box;
        }
    }
`;

export const StyledLogo = styled.img`
    width: 30px;
    margin: 10px;
`;

export const StyledMenu = styled.div`
    float: right;
    font-size: 1.5em;
    padding-top: 10px;
    color: #ffff;

    @media screen and (max-width: 500px) {
        display: inline-block;
    }
`;
