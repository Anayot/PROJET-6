import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { MediaMobile } from '../../utils/style/GlobalStyle'

const StarRate  = styled.div`
    display: flex;
    gap: 4px;
    ${MediaMobile} {
        gap: 2px;
    }
`

const FullStar = styled(FontAwesomeIcon)`
    font-size: 24px;
    padding: 6px;
    ${MediaMobile} {
        font-size: 13px;
        padding: 2px;
`

const GreyStar = styled(FontAwesomeIcon)`
    font-size: 24px;
    padding: 6px;
    & * {
    color: #E3E3E3!important;
    } 
    ${MediaMobile} {
        font-size: 13px;
        padding: 2px;
}
`

function Ratings({rating}) {
    const values = [1, 2, 3, 4, 5]

    return(
        <StarRate>
        {values.map((value) => {
            return rating >= value ? (
                <FullStar icon={faStar} key={value}/> 
            ) : (
                <GreyStar icon={faStar} key={value}/> 
            )
            }
        )}
            
        </StarRate>
    )

}

export default Ratings
