import styled from 'styled-components'

export const Container = styled.section`
    width: 800px;
    border-radius: 5px;
    margin: 4rem auto;
    background-color: white;
    height: auto;
    padding: 4rem;
    
    .logout {
        margin-left: auto;
    }

    .logout a {
        text-decoration: none;
        text-align: right;
        font-size: 18px;
        color: red;
    }

    .logout:hover  a{
        color: rgb(157, 11, 11);
        text-decoration: underline;
    }
    
    .admin_space {
        background: #00B2FF;
        align-items: center;
        border: none;
        border-radius: 5px;
        text-decoration: none;
        color: white;
        padding: 6px;
        height: auto;
        font-size: 18px;
        font-weight: bold;
    }

    .info {
        margin-left: auto;
        margin-bottom: 2rem;
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

    .menu{
        list-style:none;
        width: 100%;
    }

    .menu li{
        position:relative;
    }

    .menu li a{
        color: white;
        text-decoration: none; 
        padding: 5px 10px; 
        display: block;
        background-color: #00B2FF;
    }

    .menu li a:hover{
        background: #0e85b8;
        color: white;
    }

    .menu li  ul{
        position: absolute;
        display: none;
        margin-top: -18px;
    }

    .menu li:hover ul, .menu li.hover ul{display: block;}

    .menu li ul li{
        border: 0.5px solid white;
        display: block;
        width: 150px;
    }

`