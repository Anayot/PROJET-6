import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import HomeBanner from '../../assets/home-banner.png'
import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
import { MediaMobile } from '../../utils/style/GlobalStyle'

const HomeContainer = styled.div`
    margin : 5px 100px 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 43px;
    ${MediaMobile} {
        margin: 7px 20px;
        gap: 22px;
    }
`

const HomeBannerContainer = styled.div`
    position: relative;
    height: 223px;
    ${MediaMobile} {
        height: 110px;
    }
`

const HomeBannerImage = styled.img`
    height: 223px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    ${MediaMobile} {
        border-radius: 10px;
        height: 110px;
    }
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
    ${MediaMobile} {
        font-size: 24px;
        border-radius: 10px;
    }
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
    ${MediaMobile} {
        background-color: white;
        grid-template-columns: 1fr;
        padding: 0;
        gap: 20px;
    }
`


const CardLink = styled(Link)`
    background-color: #FF6060;
    width: 100%;
    height: 340px;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
    position: relative;
`

function Home() {
    const { data, error } = useFetch('./assets/data.json', [])


    if (error) {
         return <span>Oups il y a eu un problème</span>
    }

    return(
        <HomeContainer>
            <HomeBannerContainer>
                <HomeBannerImage src={HomeBanner} alt="banner"/>
                <HomeBannerText>Chez vous, partout et ailleurs</HomeBannerText>
            </HomeBannerContainer>
            <CardsContainer>
                {data.map((item) => (
                    <CardLink to={`./location/${item.id}`} key={`${item.id}`}>
                        <Card 
                            cover={item.cover}
                            title={item.title}
                        />
                    </CardLink>
                ))}

            </CardsContainer>
        </HomeContainer>
    )
}


export default Home