import { Container } from './styles.js'
import Gmail from '../../assets/Gmail.png'
import Github from '../../assets/Github.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <Container>
                <Link to='/aboutus'><p>Sobre nós</p></Link>
                <a href='https://github.com/kalebhenrique/projeto-final-react' target="_blank" rel="noreferrer">
                    <img src={Gmail} class='gmail_icon' alt='Gmail'/>
                </a>
                <a href='https://github.com/kalebhenrique/projeto-final-react' target="_blank" rel="noreferrer">
                    <img src={Github} class='github_icon' alt='Github'/>
                </a>
                <a href='https://github.com/kalebhenrique/projeto-final-react' target="_blank" rel="noreferrer">
                    <img src={Facebook} class='facebook_icon' alt='facebook'/>
                </a>
                <a href='https://github.com/kalebhenrique/projeto-final-react' target="_blank" rel="noreferrer">
                    <img src={Instagram} class='instagram_icon' alt='Instagram'/>
                </a>
                <h1>Copyright © 2022 - Caneta Azul LTDA</h1>
        </Container>
    )
}

export default Footer