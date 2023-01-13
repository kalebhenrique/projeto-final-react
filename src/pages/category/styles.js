import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1115px;
    border: none;
    border-radius: 5px;
    margin: 4rem auto;
    background-color: white;
    height: auto;
    padding: 2rem;

    p {
        margin: 8px 2rem;
        font-weight: bold;
    }

    .results {
        display : flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`