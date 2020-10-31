import styled from 'styled-components';

export const StyledGrid = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
`;

export const StyledGridContent = styled.div`
    // max-width: 1000px;
    margin: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    }
`;
