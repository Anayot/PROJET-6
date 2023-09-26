import styled from 'styled-components'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { MediaMobile } from '../../utils/style/GlobalStyle'


const CollapserContainer = styled.div`
    background-color: #FF6060;
    border-radius: 5px;
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 30px);
`

const CollapserTitle = styled.span`
    color: white;
    ${MediaMobile} {
        font-size: 13px;
    }   
`

const CollapserButton = styled.div`
    cursor: pointer;
    border: none;
    width: 32px;
    text-align: center;
    & * {
        color: white!important;
    }
    & .chevron {
        transition: transform 0.5s ease-in-out;
        &.up{
            transform: rotate(180deg);
        }
    }
`

const CollapserDescription = styled.div`
    background-color: #F6F6F6;
    padding: 20px;
    border-radius: 0 0 5px 5px;
    margin: 0;
    width: calc(100% - 40px);
    transition: all 500ms ease-in-out;
    overflow: hidden;
    ${MediaMobile} {
        font-size: 13px;
    }
`

const Chevron = ({isOpen}) => <FontAwesomeIcon icon={faChevronDown} className={isOpen?"chevron up":"chevron"} />


function Collapser({title, description, titleSize=24}) {
    const [isOpen, setIsOpen] = useState(false)
    const [animating, setAnimating] = useState('')
    
    const changeButton= () => {
        if(isOpen) {
            setAnimating('opening')
            setTimeout(() => {
                setAnimating('')
                setIsOpen(false)
            }, 500)
        } else {
            setIsOpen(true)
        }
    }

    return(
        <div style={{width: '100%'}}>
            <CollapserContainer style={{fontSize: titleSize + 'px'}}>
                <CollapserTitle>{title}</CollapserTitle>
                <CollapserButton onClick={changeButton}>
                    <Chevron isOpen={isOpen}/>
                </CollapserButton>
            </CollapserContainer>
            {isOpen && <CollapserDescription className={animating}>{description}</CollapserDescription>}
        </div>
    )
}

export default Collapser