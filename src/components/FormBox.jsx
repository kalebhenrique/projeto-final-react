import styled from 'styled-components'

export const FormBox = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top: 3rem;
    margin-bottom: 4rem;
    width: 100%;

    img {
        text-align: center;
    }

    div {
        background-color: white;
        width: 409px;
        padding-bottom: 20px;
        height: auto;
        border-radius: 5px;
        border: 1px solid rgba(225, 225, 225, 0.1)
    }

    h1 {
        font-family: Inter, sans-serif;
        display: flex;
        margin: 10 auto;
        text-align:center;
        color: black;
    }

    p {
        font-family: Inter, sans-serif;
        margin-left: 18px;
        margin-top: 36px;
        font-size: 20px;
        font-weight: 700;
    }

    input {
        display: flex;
        margin: 18px;
        height: 38px;
        width: 360px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        background: #E9E9E9;
    }

    button {
        display: grid;
        margin: 0 auto;
        height: 42px;
        width: 268px;
        background: #00B2FF;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
        font-size: 30px; 
        color: white;
    }

    button:active {
        background: #0e85b8;
    }
`