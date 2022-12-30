import { Container } from './styles.js'
import Gmail from '../../assets/Gmail.png'
import Github from '../../assets/Github.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <Container>
                <Link to='#'><p>Sobre nós</p></Link>
                <Link to='#'><img src={Gmail} class='gmail_icon' alt='Gmail'/></Link>
                <Link to='#'><img src={Github} class='github_icon' alt='Github'/></Link>
                <Link to='#'><img src={Facebook} class='facebook_icon' alt='facebook'/></Link>
                <Link to='#'><img src={Instagram} class='instagram_icon' alt='Instagram'/></Link>
                <h1>Copyright © 2022 -   Caneta Azul LTDA</h1>
        </Container>
    )
}

export default Footer