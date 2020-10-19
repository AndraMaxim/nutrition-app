import styled from 'styled-components';

export const StyledGrid = styled.div`
    justify-content: center;
    margin: 0 auto;
    padding: 0 20px;
`;

export const StyledGridContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 10px;
    position: relative;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
`;
