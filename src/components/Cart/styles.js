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
    
    .image_box {
        margin-left: 110px;
        margin-top: 20px;
        border: solid 2px;
        width: 300px;
        height: 290px;
        text-align: center;
        background: white;
    }

    img {
        margin: auto;
        max-width: 270px;
        max-height: 270px;
    }

    div {
        display: flex;
        margin-top: 10px;
        margin-left: 10px;
        width: 260px;
        border: none;
        border-radius: 5px;
        flex-direction: column;
        padding: 8px;
    }

    .name_box {
        background: #E9E9E9;
        font-size: 30px;
    }

    .quantity_box {
        background: #E9E9E9;
        flex-direction: row;
        width: 170px;
        margin-top: 40px;
        font-size: 20px;
    }

    .price_box {
        margin-top: 80px;
        margin-left: 500px;
        background: #E9E9E9;
        font-size: 30px;
        width: 110px;
        height: 60px;
        justify-content:center;
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