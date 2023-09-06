import Carrousel from '../../components/Carrousel'
import styled from 'styled-components'

const LocationContainer = styled.div`
    margin: 5px 100px 50px 100px;
    display: flex;
    flex-direction: column;
`

const CarrouselContainer = styled.div`
    width: 100%;
    height: 415px; 
    border: 1px solid;
`

function Location() {
    return(
        <LocationContainer>
            <CarrouselContainer>
                <Carrousel />
            </CarrouselContainer>
            <div>
                <div>
                    <div>Title</div>
                    <div>Hôte</div>
                    <div>Rate</div>
                </div>
                <div>
                    <div>Tags</div>
                    <div>Details</div>
                </div>
            </div>
            <div>
                <div>Description</div>
                <div>Equipements</div>
            </div>
        </LocationContainer>
    )
}

export default Location