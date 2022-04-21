import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Button from '../../components/general/Button'
import RoundButton from '../../components/general/RoundButton'
import { useWuphfUser } from '../../hooks/WuphfUserContext'

export default function FollowInformation(props) {
    const router = useRouter()
	const { id } = router.query
    
    const { wuphfUser } = useWuphfUser()
    const { onClick } = props

    if (id === wuphfUser?.userName) {
        return (
            <Buttons>
                <Button variant='primary'>
                    {wuphfUser?._count.Following} Following
                </Button>
                <Button variant='primary'>
                    {wuphfUser?._count.Followee || '0'} Followers
                </Button>
            </Buttons>
        )
    } else {
        return (
            <Buttons>
                <RoundButton variant='primary'>
                    <FontAwesomeIcon icon={faBell} />
                </RoundButton>
                <Button onClick={onClick} variant='primary'>
                    Follow
                </Button>
            </Buttons>
        )
    }
}

const Buttons = styled.div`
	display: flex;
	gap: 0.5rem;
`