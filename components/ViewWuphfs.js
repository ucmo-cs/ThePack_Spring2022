import React from 'react'
import styles from '../styles/ViewWuphfs.module.css'
import ViewWuphf from './ViewWuphf'

function ViewWuphfs(props) {
	return (
		<div className={styles.containers}>
			{props.posts.map((post) => (
				<div className={styles.postborder} key={post.id}>
					<ViewWuphf {...post} />
				</div>
			))}
		</div>
	)
}

export default ViewWuphfs
