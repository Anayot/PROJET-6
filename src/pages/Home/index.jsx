import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import HomeBanner from '../../assets/home-banner.png'
import styled from 'styled-components'

const HomeContainer = styled.div`
    margin : 5px 100px 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 43px;
`

const HomeBannerContainer = styled.div`
    position: relative;
    height: 223px;
`

const HomeBannerImage = styled.img`
    height: 223px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
`

const HomeBannerText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: white;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.3);
`

const CardsContainer = styled.div`
    background-color: #F6F6F6;
    border-radius: 25px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    gap: 50px;
    padding: 50px;
`

const locations = [
    {
        title: 'Titre de la location'
    },

    {
        title: 'Location 4'
    },

    {
        title: 'Titre de la location'
    },

    {
        title: 'Titre de la location'
    },

    {
        title: 'Titre de la location'
    },

    {
        title: 'Titre de la location'
    },

    {
        title: 'Titre de la location'
    },

    {
        title: 'Titre de la location'
    },

    {
        title: 'Titre de la location'
    },

    
]


function Home() {
    return(
        <HomeContainer>
            <HomeBannerContainer>
                <HomeBannerImage src={HomeBanner} alt="banner"/>
                <HomeBannerText>Chez vous, partout et ailleurs</HomeBannerText>
            </HomeBannerContainer>
            <CardsContainer>
                {locations.map((log, index) => (
                    <Link to='/location'>
                    <Card key={`${log}-${index}`}
                        title={log.title}
                    />
                    </Link>
                ))}

            </CardsContainer>
        </HomeContainer>
    )
}

export default Home