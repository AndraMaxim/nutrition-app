import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    width: 100%;
    background: #1c1c1c;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
`;

export const StyledSearchBarContent = styled.div`
    width: 100%;
    height: 40px;
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;

    .fa-search {
        position: absolute;
        left: 20px;
        top: 10px;
        color: #fff;
        z-index: 1000;
        font-size: 1.3em;
    }

    input {
        font-family: 'Abel', sans-serif;
        font-size: 20px;
        position: absolute;
        left: 0px;
        padding: 0 0 0 60px;
        border: 0;
        background: transparent;
        height: 40px;
        color: #fff;
        box-sizing: border-box;

        :focus {
        outline: none;
        }

        @media screen and (max-width: 720px) {
        font-size: 18px;
        }
    }

    .search-button {
        font-family: 'Abel', sans-serif;
        font-size: 20px;
        cursor: pointer;
        float: right;
        background: #1c1c1c;
        height: 40px;
        border: 0;
        border-radius: 40px;
        color: #fff;
        padding: 0 20px;
        outline:none;
        }

    .search-button:hover {
        background-color: #3e8e41;
        }

    .search-button:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
        }
`;
