import styled from 'styled-components'

export const ListCrud = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    text-align: center;
    margin: 2rem auto 0 auto;
    width: 1400px;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    padding-top: 1rem;
    padding-bottom: 1rem;

    h1 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1rem;
    }

    .products_list {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin: 1rem;
        border: 1px solid black;
        border-radius: 5px;
        width: 90%;
    }
`

export const ElementContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 100%;
    padding: 0.5rem;
    border-top: 1px solid black;

    .containers {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .containers span {
        font-size: 0.9rem;
    }

    .containers img {
        width: 60px;
        height: 60px;
    }

    .containers .options {
        width: 30px;
        height: 30px;
    }

    button {
        border: none;
        width: 45px;
        height: 45px;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        cursor: pointer;
    }
`