import styled from 'styled-components'

export const Content = styled.div`
        background-color: #E9E9E9;
        display: grid;

    .materiais {
        height: 20rem;
        width: 106rem;
        margin: 7rem 7rem 3rem 7rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        background-color: white;
        overflow: hidden;
    }

    h1{
        font-size: 1.5rem; 
        font-weight: bold;
        margin-left: 1rem;
        cursor: pointer;
        margin-top: 1.4rem;
    }

    .materiais .slides img{
            margin-left: 1rem;
            margin-right: 0.5rem;
            cursor: pointer;
    }

    .materiais img{
        height: 14rem;
        width: 12rem;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        margin: -0.9rem 0rem 0rem 0rem;
    }

    .materiais .slides input{
        display: none;
    }

    .cadernos {
        height: 20rem;
        width: 106rem;
        margin: 0rem 7rem 3rem 7rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        background-color: white;
        overflow: hidden;
    }
        
    h2{
        font-size: 1.5rem; 
        font-weight: bold;
        padding-left: 1rem;
        cursor: pointer;
    }

    .cadernos .slides img{
        margin-left: 1rem;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    .cadernos img{
        height: 14rem;
        width: 12rem;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        margin: 0rem 0rem 7rem 0rem;
    }

    .cadernos .slides input{
        display: none;
    }

    .mochilas {
        height: 20rem;
        width: 106rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black;
        background-color: white;
        overflow: hidden;
        margin: 0rem 7rem 7rem 7rem;
    }

    h3{
        font-size: 1.5rem; 
        font-weight: bold;
        padding-left: 1rem;
        cursor: pointer;
    }

    .mochilas .slides img{
        margin-left: 1rem;
        margin-right: 0.5rem;
        cursor: pointer;
    }

    .mochilas img{
        height: 14rem;
        width: 12rem;
        border-style: solid;
        border-color: black;
        border-radius: 5px;
        margin: 0rem 0rem 0rem 2rem;
    }

    .mochilas .slides input{
        display: none;
    }

@media screen and (max-width:430px) {
        display: flex;
        background-color: #E9E9E9;

    h1{
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        margin-left: 1rem;
    }

    .materiais{
        width: 24.6rem;
        height: 17rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
        background-color: white;
        margin: 4rem 1rem 0rem 1rem;
    }

    .materiais .slides{
        width: 24.6rem;
        height: 17rem;
        display: flex;
    }

    .materiais .slides input{
        display: none;
    }

    .materiais .slide{
        width: 10rem;
        transition: 1s;
        margin-right: 1rem;
        margin-top: 3.5rem;
        margin-left: 1rem;
    }

    .materiais .slides img{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem -13rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .materiais .slides .image{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem 0rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .materiais .manual{
        width: 24.4rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
    }

    .materiais .botao{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .materiais .botao:not(:last-child){
        margin-right: 40px;
    }

    .materiais .botao:hover{
        background-color: white;
    }

    .materiais #radio1:checked ~ .first{
        margin-left: -53%;
    }

    .materiais #radio2:checked ~ .first{
        margin-left: -106%;
    }

    .materiais #radio3:checked ~ .first{
        margin-left: -159%;
    }

    .materiais #radio4:checked ~ .first{
        margin-left: -214%;
    }

    h2{
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        margin-left: 0rem;
    }

    .cadernos{
        width: 24.6rem;
        height: 17rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
        background-color: white;
        margin: 23rem 0rem 0rem -25.5rem;
    }

    .cadernos .slides{
        width: 24.6rem;
        height: 17rem;
        display: flex;
    }

    .cadernos .slides input{
        display: none;
    }

    .cadernos .slide{
        width: 10rem;
        transition: 1s;
        margin-right: 1rem;
        margin-top: 3.5rem;
        margin-left: 1rem;
    }

    .cadernos .slides img{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem -13rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .cadernos .slides .image{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem 0rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .cadernos .manual{
        width: 24.4rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
    }

    .cadernos .botao{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .cadernos .botao:not(:last-child){
        margin-right: 40px;
    }

    .cadernos .botao:hover{
        background-color: white;
    }

    .cadernos #radio5:checked ~ .first{
        margin-left: -53%;
    }

    .cadernos #radio6:checked ~ .first{
        margin-left: -116%;
    }

    .cadernos #radio7:checked ~ .first{
        margin-left: -178%;
    }

    h3{
        font-weight: bold;
        font-size: 1.25rem;
        white-space: nowrap;
        margin-left: 0rem;
    }

    .mochilas{
        width: 24.6rem;
        height: 17rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
        background-color: white;
        margin: 42rem 0rem 4rem -24.5rem;
    }

    .mochilas .slides{
        width: 24.6rem;
        height: 17rem;
        display: flex;
    }

    .mochilas .slides input{
        display: none;
    }

    .mochilas .slide{
        width: 10rem;
        transition: 1s;
        margin-right: 1rem;
        margin-top: 3.5rem;
        margin-left: 1rem;
    }

    .mochilas .slides img{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem -13rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .mochilas .slides .image{
        width: 8rem;
        height: 10rem;
        margin: 4rem 1rem 0rem 0rem;
        border-radius: 5px;
        border-style: solid;
        border-color: black
    }

    .mochilas .manual{
        width: 24.4rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
    }

    .mochilas .botao{
        border: 2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }

    .mochilas .botao:not(:last-child){
        margin-right: 40px;
    }

    .mochilas .botao:hover{
        background-color: white;
    }

    .mochilas #radio8:checked ~ .first{
        margin-left: -53%;
    }

    .mochilas #radio9:checked ~ .first{
        margin-left: -106%;
    }

    .mochilas #radio10:checked ~ .first{
        margin-left: -159%;
    }

    .mochilas #radio11:checked ~ .first{
        margin-left: -214%;
    }
`   