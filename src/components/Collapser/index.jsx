import styled from 'styled-components'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import '../../utils/style/Index.css'


const CollapserContainer = styled.div`
    background-color: #FF6060;
    border-radius: 5px;
    font-size: 24px;
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CollapserTitle = styled.span`
    color: white;   
`

const CollapserButton = styled.div`
    cursor: pointer;
    background-color: white;
    border: none;
`

const CollapserDescription = styled.p`
    background-color: #F6F6F6;
    padding: 20px;
    border-radius: 0 0 5px 5px;
    margin: 0;
`

const chevronDown = <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} />
const chevronUp = <FontAwesomeIcon icon={faChevronUp} className='chevron'/>


function Collapser({title, description}) {
    const [isOpen, setIsOpen] = useState(false)
    const changeButton= () => setIsOpen(!isOpen)

    return(
        <div>
            <CollapserContainer>
                <CollapserTitle>{title}</CollapserTitle>
                <CollapserButton onClick={changeButton} >{isOpen ? (chevronUp) : (chevronDown)}</CollapserButton>
            </CollapserContainer>
            {isOpen && <CollapserDescription>{description}</CollapserDescription>}
        </div>
    )
}

export default Collapser