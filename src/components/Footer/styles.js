import styled from 'styled-components'

export const Container = styled.footer`
    width: 100%;
    background-color: #FFC700;
    max-height: 4.5rem;
    height: 100%;
    display: flex;
    font-size: 20px;

    p { 
        font-weight: bold;
        margin: 1.5rem 1rem;
    }

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }

    .gmail_icon {
        width: 3.5rem;
        height: 2.5rem;
        margin: 1rem 0rem 0rem 1rem;
    }

    .github_icon {
        width: 3rem;
        height: 3rem;
        margin: 0.7rem 0rem 0rem 1rem;
    }

    .facebook_icon {
        width: 3rem;
        height: 3rem;
        margin: 0.7rem 0rem 0rem 0.6rem;
    }

    .instagram_icon {
        width: 4rem;
        height: 4rem;
        margin: 0.3rem 0rem 0rem 0.1rem;
    }

    h1 {
        font-size: 20px;
        margin: 1.5rem 2rem 0rem auto;
        font-weight: bold;
    }
    
@media screen and (max-width:800px) {
    font-size: 16px;

    h1 {
        font-size: 16px;
    }

    .gmail_icon {
        width: 2.5rem;
        height: 1.5rem;
        margin: 1rem 0rem 0rem 1rem;
    }

    .github_icon {
        width: 2rem;
        height: 2rem;
        margin: 0.7rem 0rem 0rem 1rem;
    }

    .facebook_icon {
        width: 2rem;
        height: 2rem;
        margin: 0.7rem 0rem 0rem 0.6rem;
    }

    .instagram_icon {
        width: 3rem;
        height: 3rem;
        margin: 0.3rem 0rem 0rem 0.1rem;
    }
}

@media screen and (max-width:420px) {
    font-size: 10px;

    h1 {
        font-size: 10px;
    }

    .gmail_icon {
        margin-top: 1.3rem;
    }

    .github_icon {
        margin-top: 1rem;
    }

    .facebook_icon {
        margin-top: 1rem;
    }

    .instagram_icon {
        margin-top: 0.7rem;
    }
}
`