import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    background-color: #00B2FF;
    height: 7.5rem;
    display: flex;
    margin-bottom: 1rem;

    .logo {
        margin: 0 2rem 1rem 1rem;
    }

    .profile_space {
        margin: 1.3rem 2rem 1rem 1rem;
        font-size: 15px;
    }

    .profile_space img{
        width: 3rem;
        height: 3rem; 
    }

    .profile_space img:hover{
        border: solid black 2px;
    }

    .profile_space img:active{
        background-color: #0f97d1;
    }

    .profile_space a:link {
        text-decoration: none;
        color: black;
    }
    .profile_space a:hover {
        text-decoration: underline;
    }
`