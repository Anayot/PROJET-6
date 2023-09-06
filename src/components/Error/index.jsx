import ErrorIllustration from '../../assets/404.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.div`
    margin: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 140px;
`

function Error() {
    return(
        <ErrorContainer>
            <img src={ErrorIllustration} alt='ErrorIllustration'/>
            <h2>Oups! La page que vous demandez n'existe pas</h2>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </ErrorContainer>
    )
}

export default Error