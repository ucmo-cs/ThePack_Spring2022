import PropTypes from 'prop-types'
import styles from '/styles/Avatar.module.css'

Avatar.propTypes = {
    username: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export function Avatar(props) {
    const { username, profileImageUrl, size } = props

    if(size === 'small') {
        return (
            <img src={profileImageUrl} alt={username} className={styles.small} />
        )
    } else if(size === 'medium') {
        return (
            <img src={profileImageUrl} alt={username} className={styles.medium} />
        )
    }
    else {
        return (
            <img src={profileImageUrl} alt={username} className={styles.large} />
        )
    }
}