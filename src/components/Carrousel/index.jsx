import { useState } from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { MediaMobile } from "../../utils/style/GlobalStyle"

const CarrouselContainer = styled.div`
    width: 100%;
    height: 415px; 
    position: relative;
    ${MediaMobile} {
        height: 215px;
    }
`

const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
    ${MediaMobile} {
        border-radius: 10px;
    }
`

const ChevronLeft = styled.div`
    position: absolute;
    left: 20px;
    top: 50%;
    cursor: pointer;
    font-size: 70px;
    transform: translateY(-50%);
    & * {
        color: white!important
    }
    ${MediaMobile} {
        font-size: 24px;
    }
`

const ChevronRight = styled.div`
    position: absolute;
    right : 20px;
    top: 50%;
    font-size: 70px;
    transform: translateY(-50%);
    cursor: pointer;
    & * {
        color: white!important
    }
    ${MediaMobile} {
        font-size: 24px;
    }
`

const SlideNumber = styled.div`
    position: absolute;
    left: 50%;
    bottom: 25px;
    color: white;
    font-size: 18px;
    ${MediaMobile} {
        display: none;
    }
`

const arrowRight = <FontAwesomeIcon icon={faChevronRight} />
const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />

function Carrousel({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalSlides = pictures.reduce(() => pictures.length)
    const actualSlide = currentIndex +1
    console.log(actualSlide)

    if (pictures && pictures.length < 1) {
        return null
    }
    
    function goToPrevious() {
        setCurrentIndex( current => (current -1 + pictures.length) % pictures.length)
    }

    function goToNext() {
        setCurrentIndex( current => (current +1 + pictures.length) % pictures.length)
    }
    
    return(
        <CarrouselContainer>
            <ImageStyle 
                src={pictures[currentIndex]}
            />
            {pictures.length > 1 && (<>
                <ChevronLeft onClick={goToPrevious}>{arrowLeft}</ChevronLeft>
                <ChevronRight onClick={goToNext}>{arrowRight}</ChevronRight>
                <SlideNumber>{actualSlide}/{totalSlides}</SlideNumber>
            </>)}
        </CarrouselContainer>
    )
}

export default Carrousel