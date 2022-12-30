import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 2.5rem;
    display: flex;

    input {
        width: 30rem;
        border: none;
        font-size: 1rem;
        padding: 0 2.625rem;
    }

    button {
        border: none;
        background-color: #FFC700;
        cursor: pointer;
    }

    button:active {
        background-color: #b48f0a;
    }

    img {
        width: 31px;
        height: 31px;
    }
`