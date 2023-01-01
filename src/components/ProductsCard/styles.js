import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    width: 140px;
    margin: 1rem 2rem;

    a {
        color: black;
        text-decoration: none;     
    }

    .product {
        border: solid 2px black;
        display: inline-flex; 
        width: 100%;
        width: 145px;
        height: auto;
        text-align: center;
        background: white;
        border-radius: 5px;
        flex-direction: column;
    }

    .info {
        text-align: center;
        border-top: solid 2px black;
        font-weight: bold;
        background-color: #E9E9E9;
        padding: 0.1rem 0 0.1rem 0;
    }
    
    img {
        margin: 0.5rem auto;
        max-width: 120px;
        max-height: 120px;
    }
`