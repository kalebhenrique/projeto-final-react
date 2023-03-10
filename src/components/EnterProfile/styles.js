import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 2rem;
    margin-right: 1rem;
    font-size: 18px;

    img {
        max-width: 50px;
        margin-top: -0.7rem;
    }

    b {
        text-decoration: none;
    }

    a {
        margin: 0 0.8rem;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }

    .quick_profile {
        margin-top: -2rem;
    }

    .quick_profile a ul li {
        text-align: center;
        justify-content: center;
    }

@media screen and (max-width:1200px) {
    font-size: 14px;

    img {
        width: 39.2px;
        margin: 0 0 0.5rem 4.4rem;
    }
}

@media screen and (max-width:800px) {
    font-size: 0.7rem;
    margin-top: 2.5rem;

    img {
        margin: 0.7rem auto 0.5rem -2rem;
    }
}

@media screen and (max-width:640px) {
    b {
        display: none;
    }
}
`