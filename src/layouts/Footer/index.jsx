import FooterLogo from '../../assets/footer-logo.png'
import styled from 'styled-components'
import { MediaMobile } from '../../utils/style/GlobalStyle'

const FooterContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    ${MediaMobile} {
        gap: 0;
        margin-top: 20px;
    }
`

const Copyright = styled.p`
    color: white;
    margin-bottom: 30px;
    ${MediaMobile} {
        font-size: 12px;
        width: 134px;
        text-align: center;
    }
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