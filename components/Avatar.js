import PropTypes from 'prop-types'

const Avatar = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`

Avatar.propTypes = {
    username: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired
}

export function Avatar(props) {
    return (
        <img src={props.profileImageUrl} alt={props.username} />
    )
}