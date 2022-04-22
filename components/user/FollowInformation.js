import { useState } from 'react'

import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import styled from 'styled-components'


import { useWuphfUser } from '../../hooks/WuphfUserContext'
import Button from '../general/Button'
import RoundButton from '../general/RoundButton'

export default function FollowInformation(props) {
    const { wuphfUser } = useWuphfUser()
    
    const { user } = props
    const [following, setFollowing] = useState(user?.isFollowed)

    async function handleFollow() {
        const res = await axios.post(`/api/users/${user.userName}/following`)

		if (res) {
			alert(`${user.userName} followed`)
            setFollowing(true)
		}
    }

    async function handleUnfollow() {
        const res = await axios.delete(`/api/users/${user.userName}/following`)

		if (res) {
			alert(`${user.userName} unfollowed`)
            setFollowing(false)
		}
    }

    if (wuphfUser?.userName === user?.userName) {
        return (
            <Buttons>
                <Button variant='primary'>
                    {user?._count?.Following || '0'} Following
                </Button>
                <Button variant='primary'>
                    {user?._count?.Followers || '0'} Followers
                </Button>
            </Buttons>
        )
    } else {
        return (
            <Buttons>
                <RoundButton variant='primary'>
                    <FontAwesomeIcon icon={faBell} />
                </RoundButton>
                {following ? <Button onClick={handleUnfollow} variant='secondary'>Unfollow</Button> :
                    <Button onClick={handleFollow} variant='primary'>Follow</Button>}
            </Buttons>
        )
    }
}

const Buttons = styled.div`
	display: flex;
	gap: 0.5rem;
`