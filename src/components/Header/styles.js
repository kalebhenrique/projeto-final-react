import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    background-color: #00B2FF;
    height: 7.5rem;
    display: flex;
    margin-bottom: 1rem;

    ul {
        list-style-type: none;
    }

    .logo {
        margin: 0 2rem 1rem 1rem;
    }

    .cart {
        margin: 1.7rem 2rem 1rem 1rem;
        font-size: 18px;
        border-radius: 5px;
        font-weight: bold;
    }

    b {
        margin-left: 15px;
        text-decoration: underline;
    }
    .cart img{
        width: 3rem;
        height: 3rem; 
    }

    .cart:active{
        background-color: #0f97d1;
    }
`