import styled from 'styled-components'

export const Container = styled.section`
    margin: 2rem auto 1rem auto;
    align-items: center;
    text-decoration: none;

    .menu {
        margin-top: -1rem;
        margin-left: -1.5rem;
    }

    ul {
        list-style-type: none;
    }

    th {
        padding: 10px;
        font-size: 1.3rem;
    }

    a {
        color: black;
        text-decoration: none;
        margin: 0 0.4rem
    }

    a:hover {
        text-decoration: underline;
    }
`