import { Container } from './styles.js'
import Gmail from '../../assets/Gmail.png'
import Github from '../../assets/Github.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Twitter.png'

const Footer = () => {
    return(
        <Container>
                <p>Sobre nós</p>
                <img src={Gmail} class='img1' alt='Gmail'/>
                <img src={Github} class='img2' alt='Github'/>
                <img src={Facebook} class='img3' alt='Facebook'/>
                <img src={Instagram} class='img4' alt='Instagram'/>
                <img src={Twitter} class='img5' alt='Twitter'/>
                <h1>Copyright © 2022 -   Caneta Azul LTDA</h1>
        </Container>
    )
}

export default Footer