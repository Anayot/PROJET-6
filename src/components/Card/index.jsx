import styled from 'styled-components'

// const CardContainer = styled.div`
//     background-color: #FF6060;
//     width: 100%;
//     height: 340px;
//     border-radius: 10px;
//     display: flex;
//     align-items: flex-end;
//`

const CardTitle = styled.h2`
    color: white;
    font-size: 18px;
    margin: 20px;
    position: absolute;
    
`

const CardImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

function Card({cover, title}) {
    return(
        <>
            <CardImage src={cover} alt='cover'/>
            <CardTitle>{title}</CardTitle>
        </>
    )
}

export default Card