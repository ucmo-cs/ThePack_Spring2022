
import styled from 'styled-components'

import Comment from '../components/comments/Comment'
import CommentInput from '../components/comments/CommentInput'
import Container from '../components/styledComponents/Container'
import Wuphf from '../components/wuphfs/Wuphf'

function CommentFeed({ session }) {

    return(
        <Container>
            <Wuphf/>
            <CommentInput/>
            <FlexWrapper>
                <CommentFeed/>
            </FlexWrapper>
        </Container>
    )
}
const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`
export default Comment
