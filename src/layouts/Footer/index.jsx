import FooterLogo from '../../assets/footer-logo.png'
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`

const Copyright = styled.p`
    color: white;
    margin-bottom: 30px;
`

const Logo = styled.img`
    margin-top: 66px;
`

function Footer() {
    return(
        <FooterContainer>
            <Logo src={FooterLogo} alt="logo" />
            <Copyright>© 2020 Kasa. All rights reserved</Copyright>
        </FooterContainer>
    )
}

export default Footer