import styled from 'styled-components'

export const Container = styled.section`
    a {
        text-decoration: none;
        color: black; 
    }

    a:hover {
        text-decoration: underline;
    }

    img{
        margin-top: 1rem;
        max-width: 50px;
        height: 100%;
    }

    .security {
        border-top: solid 2px;
        width: 100%;
        text-decoration: none;
        color: black;
    }

    .payment {
        border-top: solid 2px;
        width: 100%;
    }

    .adress {
        border-top: solid 2px;
        width: 100%;
        border-bottom: solid 2px;
    }
`