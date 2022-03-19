import React from 'react'
import styles from '../styles/ViewWuphfs.module.css'
import Avatar from './Avatar'

function ViewWuphf(props) {
	return (
		<div className={styles.container}>
			<span className={styles.avatar}>
				<Avatar
					username={props.username}
					profileImageUrl={props.avatar}
					size='medium'
				/>
				<span className={styles.username}>{props.username}</span>
			</span>
			<div className={styles.post}>{props.post}</div>
		</div>
	)
}

export default ViewWuphf
