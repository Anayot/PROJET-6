import { Link } from 'react-router-dom'
import HeaderLogo from '../../assets/header-logo.png'
import styled from 'styled-components'

const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 45px 100px;
`

const StyledLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;
    font-size: 24px;
    padding-left: 57px;
    &: hover {
        text-decoration: underline;
    }
`

function Header() {
    return(
        <HeaderContainer>
            <Link to='/'>
                <img src={HeaderLogo} alt='logo'/>
            </Link>
            <div>
                <StyledLink to='/'>
                    Accueil
                </StyledLink>
                <StyledLink to='/about'>
                    A Propos
                </StyledLink>
            </div>
        </HeaderContainer>
    )
}

export default Header