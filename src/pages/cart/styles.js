import styled from 'styled-components'

export const Container = styled.section`
    justify-content:center;
    margin: 0 auto;
    align-items:center;
    max-width: 1600px;
    height: 800px;  
    background-color: white;
    border-radius: 5px;
    padding: 50px;
    font-weight: bold;
    font-size: 20px;

    h1 {
        display: flex;
        margin-left: 128px;
        font-family: 'Inter';
        border-bottom: 2px solid;
        width: 184px
    }

    .product_box{
        width: 1500px;
        height: 350px;
        display: flex;
        flex-direction: row;
        border-top: 1px solid;
        border-bottom: 1px solid;
        border-radius: 0;
    }

    .total__container {
        margin-left: 1000px;
    }

    .totalprice_box {
        margin-top: 30px;
        width: 310px;
        height: 60px;
        background: #E9E9E9;
        font-size: 25px;
        align-items: left;
        justify-content: center;
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