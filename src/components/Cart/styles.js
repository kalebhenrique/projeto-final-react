import styled from 'styled-components'

export const Container = styled.section`
    display:flex;
    justify-content:center;
    margin: 3rem auto auto auto;
    align-items:center;
    max-width: 1180px; 
    background-color: white;
    border-radius: 5px;
    padding: 50px;
    font-weight: bold;
    font-size: 20px;

    .carrinho__container {
        margin: 0 auto;
        background: white;
        width: 1180px;
        height: 858px;
        border: 1px solid rgba(225,225,225,0.1);
        border-radius: 2px; 
    }

    .tittle__container {
        margin-left: 128px;
        margin-top: 100px;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 18px;
        border-bottom: 2px solid #000;
        line-height: 0;
        display: inline-block;
    }

    .image_box {
        border: solid 1px;
        width: 290px;
        height: 290px;
        text-align: center;
        background: white;
        margin-left: 127px;
        margin-top: 50px;
    }

    img {
        max-width: 270px;
        max-height: 270px;
    }

    .product_container {
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
        border-radius: 5px;
        font-size: 30px;
        width: 263px;
        height: 50px;
        margin-left: 450px;
        margin-top: 0px;
        line-height: 50px;
        text-align: left
    }

    .quantity_box {
        background: #E9E9E9;
        flex-direction: row;
        width: 192px;
        height: 44px;
        margin-top: 10px;
        text-align:center;
        line-height: 44px;
    }
`