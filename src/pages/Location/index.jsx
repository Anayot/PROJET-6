import Carrousel from '../../components/Carrousel'
import Ratings from '../../components/Ratings'
import styled from 'styled-components'
import Collapser from '../../components/Collapser'
import { useFetch } from '../../utils/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MediaMobile } from '../../utils/style/GlobalStyle'


const LocationContainer = styled.div`
    margin: 5px 100px 50px 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${MediaMobile} {
        margin: 7px 20px;
        gap: 15px;
    }
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${MediaMobile} {
        flex-direction: column;
    }

`

const DetailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 75px;
    ${MediaMobile} {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`

const Title = styled.div`
    font-size: 36px;
    ${MediaMobile} {
        font-size: 18px;
    }
`

const Tags = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style-type: none;
    gap: 10px;
`

const Tag = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FF6060;
    font-size: 14px;
    align-items: center;
    border-radius: 10px;
    color: white;
    min-width: 115px;
    padding: 3px;
    ${MediaMobile} {
        font-size: 10px;
        min-width: 84px;
        border-radius: 5px;
    }
`

const Place = styled.div`
    margin-bottom: 20px;
    font-size: 18px;
    ${MediaMobile} {
        font-size: 14px;
    }
`

const HostContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 21px;
    ${MediaMobile} {
        display: flex;
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        font-size: 12px;
    }
`

const Host = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

const HostName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;     
`

const HostImage = styled.img`
    border-radius: 50%;
    width: 64px;
    aspect-ratio: 1/1;
    object-fit: cover;
    ${MediaMobile} {
        width: 32px;
    }
`

function Location() {
    const id = useParams().id
    const { data } = useFetch('../assets/data.json', [])
    const [location, setLocation] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const loc = data.find(item => item.id === id)
        if(data.length > 0 && !loc) {
            navigate('../error')
        }
        setLocation(loc)

    }, [data, setLocation, id, navigate])
    console.log(data)


    return(
        <>
        {location && (
        <LocationContainer>
            <Carrousel pictures={location.pictures}/>
            <MainContainer>
                <div>
                    <Title>{location.title}</Title>
                    <Place>{location.location}</Place>
                    <Tags>{location.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Tags>
                </div>
                <HostContainer>
                    <Host>
                        <HostName>{location.host.name.split(" ").map((name) => <div>{name}</div>)}</HostName>
                        <HostImage src={location.host.picture} alt={location.host.name}/>
                    </Host>
                    <Ratings rating={location.rating}/>
                </HostContainer>
            </MainContainer>
            <DetailContainer>
                <Collapser titleSize={18} title="Description" description={location.description} />
                <Collapser titleSize={18} title="Equipements" description={location.equipments.map((item) => <div key={item}>{item}</div> )}/>
            </DetailContainer>
        </LocationContainer>
        )}
        </>
    )
}

export default Location