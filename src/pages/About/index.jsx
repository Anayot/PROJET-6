import styled from 'styled-components'
import AboutBanner from '../../assets/about-banner.png'
import Collapser from '../../components/Collapser'

const MainContainer = styled.div`
    margin : 5px 100px 0px 100px;
    display: flex;
    flex-direction: column;
`

const AboutBannerContainer = styled.div`
    height: 223px;
    position: relative;
`

const AboutBannerImage = styled.img`
    height: 223px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
`

const AboutBannerText = styled.div`
    position: absolute;
    border-radius: 25px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
`

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 38px 205px;
    gap: 30px;
`

const aboutDescription = [
    {
        title: 'Fiabilité',
        description:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        title:'Respect',
        description:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title:'Service',
        description:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        title:'Sécurité',
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]


function About() {
    return(
        <MainContainer>
        <AboutBannerContainer>
            <AboutBannerImage src={AboutBanner} alt="banner"/>
            <AboutBannerText></AboutBannerText>
        </AboutBannerContainer>
        <AboutContainer>
            {aboutDescription.map((obj, index) => (
                <Collapser key={`${obj}-${index}`}
                    title={obj.title}
                    description={obj.description}
                />                  
            ))}
        </AboutContainer>
    </MainContainer>
    )
}

export default About