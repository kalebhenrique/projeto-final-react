import styled from 'styled-components'

export const Container = styled.section`
    width: 800px;
    border-radius: 5px;
    margin: 4rem auto;
    background-color: white;
    height: auto;
    padding: 4rem;
    
    .logout {
        text-decoration: none;
        text-align: right;
        font-size: 18px;
        color: red;
    }

    .logout:hover {
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
        height: 2.3rem;
        margin-top: 20px;
        font-size: 20px;
        font-weight: bold;
    }

    .admin_space:hover {
        background: #0e85b8;
    }

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