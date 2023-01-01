import styled from 'styled-components'

export const Container = styled.section`
    width: 800px;
    border-radius: 5px;
    margin: 4rem auto;
    background-color: white;
    height: auto;
    padding: 4rem;
    
    .info {
        margin-left: 70px;
    }

    div {
        display: flex;
        flex-direction: row;
    }

    .column {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .profile_pic {
        border-radius: 20rem;
        max-width: 245px;
        max-height: 238px;
        margin: 0 auto 4rem auto;
    }

    button {
        width: 40px;
        height: 40px;
        border: none;
        background-color: white;
        text-align: center;
        margin-left: 40px;
        margin-top: 20px;
        cursor: pointer;
    }

    button:active {
        border: solid 2px;
    }

    h2 {
        padding: 6px;
        height: 2.3rem;
        border-radius: 5px;
        width: auto;
        background-color: #E9E9E9;
    }
`