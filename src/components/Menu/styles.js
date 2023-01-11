import styled from 'styled-components'

export const Container = styled.nav`
    margin: 2rem auto 1rem auto;
    align-items: center;
    text-decoration: none;

    .menu {
        margin-top: -0.3rem;
        margin-left: -1.5rem;
    }

    ul {
        list-style-type: none;
    }

    span {
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
    }

    a {
        color: black;
        text-decoration: none;
        margin: 0 0.4rem
    }

    a:hover {
        text-decoration: underline;
    }

@media screen and (max-width:986px) {  
    .menu {
        margin-top: -0.5rem;
        margin-left: -3.2rem;
    }

    th {
        font-size: 0.78rem;
    }

    a {
        margin: 0 0.2rem
    }
}

@media screen and (max-width:720px) {

    span {
        padding: 4px;
        font-size: 0.7rem;
    }

    a {
        margin: 0 0.1rem
    }
}
`