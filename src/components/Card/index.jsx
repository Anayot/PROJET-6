import styled from 'styled-components'

const CardContainer = styled.div`
    background-color: #FF6060;
    width: 340px;
    height: 340px;
    border-radius: 10px;
    display: flex;
    align-items: flex-end;
`

const CardTitle = styled.h2`
    color: white;
    font-size: 18px;
    margin: 20px;
    
`

function Card({title}) {
    return(
        <CardContainer>
            <CardTitle>{title}</CardTitle>
        </CardContainer>
    )
}

export default Card