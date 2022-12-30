import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    
    div {
        background-color: white;
        width: 50vw
        padding: 0.9 rem;
        border-radius: 5px;
        border: 1px solid rgba(225, 225, 225, 0.1)
    }
    
    h1 {
        font-family: Ariel, sans-serif;
        display: flex;
        margin: 10 auto;
        text-align:center;
        color: black
    }

    input {
        display: flex;
        margin: 1.5rem;
        height: 40px;
        width: 50vh;
        border-radius: 5px;
        background: #E9E9E9
    }

    button {
        display: flex;
        margin: 0 auto;
        height: 42px;
        width: 268px;
        background: #00B2FF;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
        font-size: 22px; 
    }
`