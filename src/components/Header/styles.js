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

@media screen and (max-width:1200px) {
    .logo img {
        margin-top: 1.3rem;
        margin-left: -1rem;
        width: 144px;
        height: 72px;
    }

    .cart {
        margin: 2.3rem 0 1rem 1rem;
        font-size: 14px;
        border-radius: 5px;
        font-weight: bold;
    }

    .cart img{
        width: 1.8rem;
        height: 1.8rem; 
    }
}

@media screen and (max-width:800px) {
    .cart {
        font-size: 0.7rem;
    }

    .logo img {
        margin-top: 2rem;
        margin-left: -1rem;
        width: 120px;
        height: 60px;
    }

    b {
        display: none;
    }
}

@media screen and (max-width:600px) {
    .logo img {
        display: none;
    }

    .cart {
        margin: 2.3rem auto 1rem 1.5rem;
    }

}
`