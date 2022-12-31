import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1115px;
    border-radius: 5px;
    margin: 4rem auto;
    background-color: white;
    display: flex;
    height: 60rem;

    img{
        border-radius: 20rem;
        max-width: 200px;
        max-height: 200px;
        margin: 3rem 0 0 15rem;
        cursor: pointer;
    }

    .name{
        padding: 6px;
        max-width: 22rem;
        width: 24rem;
        border-radius: 5px;
        font-size: 2rem;
        margin: 5rem 0rem 0 4rem;
        background-color: #E9E9E9
    }

    .info{
        border-radius: 5px;
        font-size: 1.8rem;
        margin: 9rem 0 1rem -22rem;
        padding: 6px;
        max-width: 25rem;
        width: 22rem;
        height: 20rem;
        background-color: #E9E9E9
    }

    h3{
        cursor: pointer;
        padding-right: 6px;
        padding-top: 6px;
        padding-left: 6px;
        border-radius: 5px;
        height: 2.3rem;
        font-size: 1.5rem;
        margin 18rem 0 0 -36.5rem;
        background-color: #E9E9E9
    }
`