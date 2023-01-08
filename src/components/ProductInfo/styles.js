import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    margin: 3rem auto auto auto;
    max-width: 800px;
    flex-direction: row;  
    background-color: white;
    border-radius: 5px;
    padding: 50px;
    font-weight: bold;
    font-size: 20px;

    .image_box {
        border: solid 2px;
        width: 290px;
        height: 290px;
        text-align: center;
        background: white;
        margin-top: 26px;
        padding: 8px;
    }

    img {
        margin: auto;
        max-width: 270px;
        max-height: 270px;
    }

    div {
        display: flex;
        margin: 10px;
        width: 360px;
        border: none;
        border-radius: 5px;
        flex-direction: column;
        padding: 8px;
    }

    .name_box {
        background: #E9E9E9;
        font-size: 30px;
    }

    .name_box b {
        font-size: 25px;
    }

    .description_box {
        background: #E9E9E9;
    }

    .quantity_box {
        background: #E9E9E9;
        flex-direction: row;
        width: 163px;
    }

    button {
        display: grid;
        margin: 10px;
        height: 61px;
        width: 360px;
        background: #00B2FF;
        align-items: center;
        border: none;
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
