import ErrorIllustration from '../../assets/404.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MediaMobile } from '../../utils/style/GlobalStyle'

const ErrorContainer = styled.div`
    margin: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 140px;
    ${MediaMobile} {
        margin: 110px 0;
    }
`
const ErrorImage = styled.img`
    ${MediaMobile} {
        width: 198px;
        height: 99px;
    }
`
const ErrorTitle = styled.div`
    font-size: 36px;
    ${MediaMobile} {
        font-size: 18px;
        text-align: center;
    }
`

const ErrorLink = styled(Link)`
    font-size: 18px;
    ${MediaMobile} {
        font-size: 14px;
    }
`


function Error() {
    return(
        <ErrorContainer>
            <ErrorImage src={ErrorIllustration} alt='ErrorIllustration'/>
            <ErrorTitle>Oups! La page que vous demandez n'existe pas</ErrorTitle>
            <ErrorLink to='/'>Retourner sur la page d'accueil</ErrorLink>
        </ErrorContainer>
    )
}

export default Error