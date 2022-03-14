import PropTypes from 'prop-types'
import styles from '/styles/Avatar.module.css'
import Link from 'next/link'
import Image from 'next/image'

Avatar.propTypes = {
    username: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

function Avatar(props) {
    const { username, profileImageUrl, size } = props

    let className = undefined
    if (size === 'small') {
        className = styles.small
    } else if (size === 'medium') {
        className = styles.medium
    }
    else {
        className = styles.large
    }

    return (
        <Link href={`/profile/${username}`} passHref>
            <Image src={profileImageUrl} alt={username} title={username} className={className} />
        </Link>
    )
}

export default Avatar