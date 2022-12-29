import { Container } from './styles.js'
import Gmail from '../../assets/Gmail.png'
import Github from '../../assets/Github.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'

const Footer = () => {
    return(
        <Container>
                <a href='#'><p>Sobre nós</p></a>
                <a href='#'><img src={Gmail} class='img1' alt='Gmail'/></a>
                <a href='#'><img src={Github} class='img2' alt='Github'/></a>
                <a href='#'><img src={Facebook} class='img3' alt='Facebook'/></a>
                <a href='#'><img src={Instagram} class='img4' alt='Instagram'/></a>
                <h1>Copyright © 2022 -   Caneta Azul LTDA</h1>
        </Container>
    )
}

export default Footer