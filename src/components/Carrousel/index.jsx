import { useState } from "react"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import ImagesSlider from '../../assets/carrousel.png'
import HomeBanner from '../../assets/home-banner.png'


const ImageStyle = styled.img`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`

const chevronRight = <FontAwesomeIcon icon={faChevronRight} />
const chevronLeft = <FontAwesomeIcon icon={faChevronLeft} />

const slideImages = [
    {
        title: 'Slide 1',
        img: ImagesSlider
    },
    {
        title: 'Slide 2',
        img: HomeBanner
    },
    {
        title: 'Slide 3',
        img: ImagesSlider
    },
    {
        title: 'Slide 4',
        img: ImagesSlider
    },
]

function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(1)
    
    function goToPrevious() {
        currentIndex > 0 && setCurrentIndex(currentIndex -1)
    }

    function goToNext() {
        currentIndex < slideImages.length - 1 && setCurrentIndex(currentIndex + 1)
    }

    return(
        <div>
            <ImageStyle 
                style={{ backgroundImage: `url(${slideImages[currentIndex].img})`}}
            />
            <div onClick={goToPrevious}>{chevronLeft}</div>
            <div onClick={goToNext}>{chevronRight}</div>
        </div>
    )
}

export default Carrousel