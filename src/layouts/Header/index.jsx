import { Link } from 'react-router-dom'
import HeaderLogo from '../../assets/header-logo.png'
import styled from 'styled-components'
import { MediaMobile } from '../../utils/style/GlobalStyle'

const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 45px 100px;
    ${MediaMobile} {
        margin: 20px;
    }
`

const StyledImg = styled.img`
    ${MediaMobile} {
        width: 145px;
    }
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 57px;
    ${MediaMobile} {
        gap: 26px;
    }
`

const StyledLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    font-size: 24px;
    &: hover {
        text-decoration: underline;
    }
    ${MediaMobile} {
        font-size: 12px;
    }
`

function Header() {
    return(
        <HeaderContainer>
            <Link to='/'>
                <StyledImg src={HeaderLogo} alt='logo'/>
            </Link>
            <StyledContainer>
                <StyledLink to='/'>
                    Accueil
                </StyledLink>
                <StyledLink to='/about'>
                    A Propos
                </StyledLink>
            </StyledContainer>
        </HeaderContainer>
    )
}

export default Header